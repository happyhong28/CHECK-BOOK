import React, { useState, useEffect,useReducer  } from 'react';
import "../common/reset.css";
// import "../common/common.sass";
import "./style/main.sass";
import Header from "../layout/header";
import Body from "../layout/body";
import Footer from "../layout/footer";
import GridList from "../component/gridList";
import SearchBar from "../component/searchBar";


function Main({page}) {
  const [filter, setFilter] = useState({ query: "", target: "" });
  return (
    <>
      <Header></Header>
      <Body>
        <SearchBar setFilter={setFilter}></SearchBar>
        <GridList filter={filter}></GridList>
      </Body>
      <Footer page={page}></Footer>
    </>
  );
}

export default Main;
