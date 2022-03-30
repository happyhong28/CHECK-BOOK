import React, { useState, useEffect,useRef } from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/gridList.sass";
import Card from "./card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { bookSearch } from "../api/bookSearch";
import Paging from "../core/pagination";
// import { getBookList } from "../component/getBookList";



function GridList({ filter }) {
  console.log("filter >>>> ",filter);


  const PAGE_SIZE = 9;
  const QUERY = filter.query;
  const TARGET = filter.target;

  const [list, setList] = useState({documents:[], meta:{}});
  const refList = useRef();

  useEffect(() => {

    console.log("1111");
    // 컴포넌트 마운트 후에, 함수를 호출한다.
    if( QUERY != "" && TARGET != ""){
      console.log("2222");
      bookSearchHttpHandler()
    }
  },[QUERY, TARGET]);


  useEffect(() => {
    console.log("list",list);
    console.log( list.documents.length);
    console.log(refList.current.children[0]);

  },[list]);




  // book search 핸들러
  const bookSearchHttpHandler = async () => {
    const params = {
      query: QUERY,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: PAGE_SIZE, // 한 페이지에 보여 질 문서의 개수
      target: TARGET//검색 필드 제한  title(제목), isbn (ISBN), publisher(출판사), person(인명)
    };
    const { data } = await bookSearch(params); // api 호출
    setList(data);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="CPNT-gridList box" ref={refList}>
      <div className="result">
        <span>가나다</span>님을 위한 <span>{list.meta.total_count}권</span>의 책을 발견했습니다!
      </div>
      <Grid container columnSpacing={0} rowSpacing={8} className="container">
        {list.documents.map((item, index) => {
          return (
            <Grid key={index} className="grid" item xs={4}>
              <Card data={item} />
            </Grid>
          );
        })}
      </Grid>
      <Paging data={list.meta} size={PAGE_SIZE}></Paging>
    </Box>
  );
}

export default GridList;
