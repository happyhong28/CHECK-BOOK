import React, { useState, useEffect, useRef } from "react";
import "../common/reset.css";
import "./style/gridList.sass";
import Card from "./card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { bookSearch } from "../api/bookSearch";
import Paging from "../core/pagination";


function GridList({ filter }) {
  console.log("GridList is Ready!");

  const PAGE_SIZE = 12;
  const QUERY = filter.query;
  const TARGET = filter.target;

  const [list, setList] = useState({ documents: [], meta: {} });
  const [page, setPage] = useState(1);
  const refList = useRef();

  useEffect(() => {
    if (TARGET != "") {
      setPage(1);
      bookSearchHttpHandler(1);
    }
  }, [QUERY, TARGET]);

  useEffect(() => {
  }, [list]);

  const getPage = function (page) {
    //자식 컴포넌트(Pagination)에서 받아온 페이지값을
    //이 컴포넌트 (부모)에서 사용하기 한다.
    setPage(page);
    bookSearchHttpHandler(page);
  }

  const bookSearchHttpHandler = async (page) => {
    const params = {
      query: QUERY ? QUERY : " ",
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: page, // 페이지번호
      size: PAGE_SIZE, // 한 페이지에 보여 질 문서의 개수
      target: TARGET//검색 필드 제한  title(제목), isbn (ISBN), publisher(출판사), person(인명)
    };
    const { data } = await bookSearch(params); // api 호출
    setList(data);
    console.log(data.documents);
  };



  //각 요소 show/hide 처리
  const ResultDisplay = () => {
    if (!(list.meta.total_count == undefined)) {
      return list.meta.total_count == 0 ? <div className="result"><span>"{QUERY}"</span>에 대한 검색결과가 없습니다.</div> : <div className="result"><span>가나다</span>님을 위한 <span>{QUERY}</span>와 관련된 <span>{list.meta.total_count}권</span>의 책을 발견했습니다!<div className="msg">* 검색결과는 최대 1000권까지만 출력됩니다.</div></div>;
    } else {
      return <div className="result emoji">☝🏻</div>
    }
  };

  const PagingDisplay = () => {
    return !list.meta.total_count ? true : <Paging pageable_count={list.meta.pageable_count} size={PAGE_SIZE} getPage={getPage} activePage={page}></Paging>;
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
