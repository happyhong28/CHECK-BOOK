import * as React from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/main.sass";
import Header from "../layout/header";
import Body from "../layout/body";
import Footer from "../layout/footer";
import GridList from "../component/gridList";
import SearchBar from "../component/searchBar";

function Main() {
  return (
    <>
      <Header></Header>
      <Body>
        <SearchBar></SearchBar>
        <GridList></GridList>
      </Body>
      <Footer></Footer>
    </>
  );
}

export default Main;
