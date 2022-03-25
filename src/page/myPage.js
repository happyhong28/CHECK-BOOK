import React, { useState, useEffect ,useRef } from 'react';
import "../common/reset.css";
import "../common/common.sass";
import "./style/myPage.sass";
import Header from "../layout/header";
import Body from "../layout/body";
import Footer from "../layout/footer";
import SimpleList from "../component/simpleList";
import Map from "../component/map";
import Menu from "../component/menu";


function ShowRightSide({index}){
  console.log({index});
  if (index === 0) { 
    return <SimpleList></SimpleList>;
  }else if (index === 1) {
    return <SimpleList></SimpleList>;
  } else if (index === 2) {
    return <Map></Map>;
  } else if (index === 3) {
    return <Map></Map>;
  } else if (index === 4) {
    return <SimpleList></SimpleList>;
  }else{
    return null;
  }
}

function MyPage({ page }) {
  console.log("PAGE");
  const NAME = "가나다";
  const [index, setIndex] = useState(0);

  return (
    <>
      <Header></Header>
      <Body>
        <div className="PAGE-myPage title">
          <div>안녕하세요</div>
          <div>
            <span className="name">{NAME}</span>
            님!
          </div>
        </div>
        <div className="lowerSide">
          <Menu setIndex={setIndex}></Menu>
          <ShowRightSide index={index}></ShowRightSide>
          {/* <SimpleList></SimpleList> */}
          {/* <Map></Map> */}
        </div>
      </Body>
      <Footer page={page}></Footer>
    </>
  );
}

export default MyPage;
