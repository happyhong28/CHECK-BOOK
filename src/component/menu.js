import React, { useState, useEffect } from 'react';
import "../common/reset.css";
import "../common/common.sass";
import "./style/menu.sass";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


//클릭된 메뉴에는 active라는 클래스를 추가하기 위해
const PATH = {
  read:
    "M10.5 0C5.72727 0 1.65136 2.96864 0 7.15909C1.65136 11.3495 5.72727 14.3182 10.5 14.3182C15.2727 14.3182 19.3486 11.3495 21 7.15909C19.3486 2.96864 15.2727 0 10.5 0ZM10.5 11.9318C7.86545 11.9318 5.72727 9.79364 5.72727 7.15909C5.72727 4.52455 7.86545 2.38636 10.5 2.38636C13.1345 2.38636 15.2727 4.52455 15.2727 7.15909C15.2727 9.79364 13.1345 11.9318 10.5 11.9318ZM10.5 4.29545C8.91545 4.29545 7.63636 5.57455 7.63636 7.15909C7.63636 8.74364 8.91545 10.0227 10.5 10.0227C12.0845 10.0227 13.3636 8.74364 13.3636 7.15909C13.3636 5.57455 12.0845 4.29545 10.5 4.29545Z"
};

const MENU = [
  {
    menuTitle: "읽은 책", iconType: "read"
  },
  {
    menuTitle: "찜한 책", iconType: "read"
  }, {
    menuTitle: "근처 도서관 찾기", iconType: "read"
  }, {
    menuTitle: "근처 서점 찾기", iconType: "read"
  }, {
    menuTitle: "나의 정보", iconType: "read"
  }

];


function GetIcon({ type }) {
  return (
    <svg className="menu-icon">
      <path d={PATH[type]} fill="white" />
    </svg>
  );
}


function Menu(props) {

  //메뉴를 클릭할 때 마다 해당 메뉴의 인덱스 값을 받아서 active 라는 클래스명을 추가한다.
  const [active, setActive] = useState(0); //기본 값은 첫번째 메뉴

  function activeMenu(index) {
    setActive(index);
  }

  //props.setIndex 는 자식 -> 부모 컴포넌트에 데이터를 전달해주는 역할(setter)이다.
  return (
    <ul className="CPNT-menu menuList">
      {MENU.map((menu, index) => (
        <li className={`menuItem ${active === index ? 'active' : ''}`} key={index} onClick={() => {
          // activeMenu(index); props.setIndex(active);
          activeMenu(index); props.setIndex(() => {return active;});
        }} >
          <div className="menuTitle">{menu.menuTitle}</div>
          <GetIcon type={menu.iconType}></GetIcon>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
