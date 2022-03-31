import React, { useState, useEffect, useRef } from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/gridList.sass";
import Card from "./card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { bookSearch } from "../api/bookSearch";
import Paging from "../core/pagination";
import { isFocusable } from "@testing-library/user-event/dist/utils";


function GridList({ filter }) {
  console.log("GridList is Ready!");

  const PAGE_SIZE = 12;
  const QUERY = filter.query;
  const TARGET = filter.target;

  const [list, setList] = useState({ documents: [], meta: {} });
  // const [page, setPage] = useState(1);
  let page = 1;
  const refList = useRef();

  useEffect(() => {
    if (QUERY != "" && TARGET != "") {
      bookSearchHttpHandler()
    }
  }, [QUERY, TARGET]);


  useEffect(() => {
    console.log("list", list);
    // console.log(list.documents.length);
    // console.log(refList.current.children[0]);
    
    // for(var i=0; i<refList.current.children[2].children.length; i++){
    //   console.log(refList.current.children[2].children[i].classList);
    // }

    if(list && list.documents.length > 0 ){
      for(var i=0; i<refList.current.children[2].children.length; i++){
   
      if( refList.current.children[2].children[i].classList.contains("active")){
        // console.log( refList.current.children[2].children[i].children[0].innerText);
        page = refList.current.children[2].children[i].children[0].innerText;
      }
    }
    }
  }, [list]);

  useEffect(() => {
    console.log("page", page);

  }, [page]);



  // book search 핸들러
  const bookSearchHttpHandler = async () => {
    const params = {
      query: QUERY,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: page, // 페이지번호
      size: PAGE_SIZE, // 한 페이지에 보여 질 문서의 개수
      target: TARGET//검색 필드 제한  title(제목), isbn (ISBN), publisher(출판사), person(인명)
    };
    const { data } = await bookSearch(params); // api 호출
    setList(data);
  };

  //각 요소 show/hide 처리
  const PagingDisplay = () => {
    // return !list.meta.total_count ? true : <Paging data={list.meta} size={PAGE_SIZE} setPage={setPage}></Paging>;
    return !list.meta.total_count ? true : <Paging data={list.meta} size={PAGE_SIZE} ></Paging>;
  };

  const ResultDisplay = () => {
    if (!(list.meta.total_count == undefined)) {
      return list.meta.total_count == 0 ? <div className="result"><span>"{QUERY}"</span>에 대한 검색결과가 없습니다.</div> : <div className="result"><span>가나다</span>님을 위한 <span>{list.meta.total_count}권</span>의 책을 발견했습니다!</div>;
    } else {
      return <div className="result"><span>☝🏻</span></div>
    }
  };


  return (
    <Box sx={{ flexGrow: 1 }} className="CPNT-gridList box" ref={refList}>
      <ResultDisplay />
      <Grid container columnSpacing={0} rowSpacing={8} className="container">
        {list.documents.map((item, index) => {
          return (
            <Grid key={index} className="grid" item xs={3}>
              <Card data={item} />
            </Grid>
          );
        })}
      </Grid>
      <PagingDisplay />
    </Box>
  );
}

export default GridList;
