import * as React from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/myPage.sass";
import Header from "../layout/header";
import Body from "../layout/body";
import Footer from "../layout/footer";
import SimpleList from "../component/simpleList";
import Map from "../component/map";
import Menu from "../component/menu";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function MyPage() {
  const name = "가나다";

  return (
    <>
      <Header></Header>
      <Body>
        <div className="PAGE-myPage title">
          <div>안녕하세요</div>
          <div>
            <span className="name">{name}</span>
            님!
          </div>
        </div>
        <div className="lowerSide">
          <Menu></Menu>
          <SimpleList></SimpleList>
          {/* <Map></Map> */}
        </div>
      </Body>
      <Footer></Footer>
    </>
  );
}

export default MyPage;
