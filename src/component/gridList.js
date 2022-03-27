import React, { useState, useEffect } from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/gridList.sass";
import Card from "./card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { bookSearch } from "../api/bookSearch";

// function GetData(props) {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     bookSearchHttpHandler(); // 컴포넌트 마운트 후에, 함수를 호출한다.
//   }, []);

//   // blog search 핸들러
//   const bookSearchHttpHandler = async () => {
//     // paramter 설정
//     const params = {
//       query: "시멘틱 에러",
//       sort: "accuracy", // accuracy | recency 정확도 or 최신
//       page: 1, // 페이지번호
//       size: 9, // 한 페이지에 보여 질 문서의 개수
//     };

//     const { data } = await bookSearch(params); // api 호출
//     setBooks(data);
//   };

//   // return books;
//   // BasicGrid(books);
// }

function BasicGrid() {
  const [docu, setDocu] = useState([]);
  const [meta, setMeta] = useState({});

  useEffect(() => {
    bookSearchHttpHandler(); // 컴포넌트 마운트 후에, 함수를 호출한다.
  }, []);

  // blog search 핸들러
  const bookSearchHttpHandler = async () => {
    // paramter 설정
    const params = {
      query: "시멘틱에러",
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 9, // 한 페이지에 보여 질 문서의 개수
    };

    const { data } = await bookSearch(params); // api 호출

    setDocu(data.documents);
    setMeta(data.meta);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="CPNT-gridList box">
      <div className="result">
        <span>가나다</span>님을 위한 <span>{meta.total_count}권</span>의 책을 발견했습니다!
      </div>
      <Grid container columnSpacing={0} rowSpacing={8} className="container">
        {docu.map((item, index) => {
          return (
            <Grid key={index} className="grid" item xs={4}>
              <Card data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default BasicGrid;
