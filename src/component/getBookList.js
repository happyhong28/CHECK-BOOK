// import React, { useState, useEffect } from 'react';
import { bookSearch } from "../api/bookSearch";

// const [data, setData] = useState({});

// useEffect(() => {
//     bookSearchHttpHandler(); // 컴포넌트 마운트 후에, 함수를 호출한다.
// }, []);
// blog search 핸들러
const bookSearchHttpHandler = async () => {
    // parameter 설정
    const params = {
        query: "컴퓨터구조",
        sort: "accuracy", // accuracy | recency 정확도 or 최신
        page: 1, // 페이지번호
        size: 9, // 한 페이지에 보여 질 문서의 개수
        target: "title" //검색 필드 제한  title(제목), isbn (ISBN), publisher(출판사), person(인명)
    };

    const { data } = await bookSearch(params); // api 호출
    //   setData(data);

};


export const getBookList = () => {
    bookSearchHttpHandler();
    return DATA;
};




