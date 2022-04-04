import React, { useState, useEffect, useRef, useMemo } from 'react';
import "../common/reset.css";
// import "../common/common.sass";
import './style/pagination.sass';
import Pagination from "react-js-pagination";

const Paging = (props) => {
    console.log("Paging is Ready!");
        
    let activePage = props.activePage;
    const handlePageChange = (page) => {
        activePage = page;
        props.getPage(page); //선택된 페이지 값을 부모 컴포넌트로 보내준다.
    };

    return (
        <Pagination
            activePage={activePage}
            itemsCountPerPage={props.size}
            totalItemsCount={props.pageable_count}
            pageRangeDisplayed={10}
            firstPageText={"|◀"}
            prevPageText={"◀"}
            nextPageText={"▶"}
            lastPageText={"▶|"}
            onChange={handlePageChange}
        />
    );
};

// export default React.memo(Paging);
export default Paging;


// activePage: 현재 페이지
// itemsCountPerPage: 한 페이지당 보여줄 리스트 아이템의 개수
// totalItemsCount: 총 아이템의 개수
// pageRangeDisplayed: Paginator 내에서 보여줄 페이지의 범위
// prevPageText: "이전"을 나타낼 텍스트 (prev, <, ...)
// nextPageText: "다음"을 나타낼 텍스트 (next, >, ...)
// onChange: 페이지가 바뀔 때 핸들링해줄 함수

