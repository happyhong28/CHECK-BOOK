import * as React from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/main.sass";
import Header from "../layout/header";
import Body from "../layout/body";
import Footer from "../layout/footer";
import GridList from "../component/gridList";
import SearchBar from "../component/searchBar";

function Main({page}) {
  return (
    <>
      <Header></Header>
      <Body>
        <SearchBar></SearchBar>
        <GridList></GridList>
      </Body>
      <Footer page={page}></Footer>
    </>
  );
}

export default Main;
