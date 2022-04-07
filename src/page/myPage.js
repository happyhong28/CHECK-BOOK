import React, { useState, useEffect ,useRef } from 'react';
import "../common/reset.css";
import "./style/myPage.sass";
import Header from "../layout/header";
import Body from "../layout/body";
import Footer from "../layout/footer";
import SimpleList from "../component/simpleList";
import Map from "../component/map";
import Menu from "../component/menu";



function ShowRightSide({index}){
  //메뉴에 해당하는 컴포넌트를 보여주기 위한 분기처리
  if (index === 0) { 
    return <SimpleList></SimpleList>;
  }else if (index === 1) {
    return <SimpleList></SimpleList>;
  } else if (index === 2) {
    return <Map type="library"></Map>;
  } else if (index === 3) {
    return <Map type="bookstore"></Map>;
  } else if (index === 4) {
    return <SimpleList></SimpleList>;
  }else{
    return null;
  }
}

function MyPage({ page }) {
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
        </div>
      </Body>
      <Footer page={page}></Footer>
    </>
  );
}

export default MyPage;
