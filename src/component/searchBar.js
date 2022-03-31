import React, { useState, useRef } from 'react';
import "../common/reset.css";
import "../common/common.sass";
import "./style/searchBar.sass";
import Select from "../core/select";
import Input from "../core/input";
import Icon from "./icon";



function SearchBar(props) {

  const refFilter = useRef();
  const refTrigger = useRef();


  function handleClick(e) {
    if (e.target.nodeName.toUpperCase() == "SVG") { //검색버튼 누르면
      getFilter();
    }
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      if (e.target.nodeName.toUpperCase() == "INPUT") {
        getFilter();
      }
    }
  }


  const getFilter = function () {
    //변화가 있을 때마다 재랜더링하지 않고,
    //검색 버튼이 클릭됐을 때 당시의 상태로 한번만 리스트를 렌더링하게 한다.
    if (refFilter.current) { //undefined 방지
      const change2eng = function (target) { //한글 타이틀을 영어로 변경해주는 함수
        if (target == "제목") { return "title"; }
        else if (target == "저자") { return "person"; }
        else if (target == "출판사") { return "publisher"; }
        else if (target == "ISBN") { return "isbn"; }
      }

      //드디어 main 컴포넌트로 검색조건과 키워드 전달
      props.setFilter(
        {
          query: refFilter.current.children[1].children[0].value,
          target: change2eng(refFilter.current.children[0].innerText)
        }
      );
    }
  }


  return (
    <div className="CPNT-searchBar"
      onClick={(e) => handleClick(e)}
      onKeyPress={(e) => handleEnter(e)}
      ref={refFilter}
    >
      <Select></Select>
      <Input></Input>
      <Icon className="icon" type="search" ></Icon>
    </div>
  );
}

export default SearchBar;
