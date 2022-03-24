import React from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/menu.sass";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const PATH = {
  read:
    "M10.5 0C5.72727 0 1.65136 2.96864 0 7.15909C1.65136 11.3495 5.72727 14.3182 10.5 14.3182C15.2727 14.3182 19.3486 11.3495 21 7.15909C19.3486 2.96864 15.2727 0 10.5 0ZM10.5 11.9318C7.86545 11.9318 5.72727 9.79364 5.72727 7.15909C5.72727 4.52455 7.86545 2.38636 10.5 2.38636C13.1345 2.38636 15.2727 4.52455 15.2727 7.15909C15.2727 9.79364 13.1345 11.9318 10.5 11.9318ZM10.5 4.29545C8.91545 4.29545 7.63636 5.57455 7.63636 7.15909C7.63636 8.74364 8.91545 10.0227 10.5 10.0227C12.0845 10.0227 13.3636 8.74364 13.3636 7.15909C13.3636 5.57455 12.0845 4.29545 10.5 4.29545Z"
};

function GetIcon({ type }) {
  return (
    <svg className="menu-icon">
      <path d={PATH[type]} fill="white" />
    </svg>
  );
}

function Menu() {
  return (
    <ul className="CPNT-menu menuList">
      <li className="menuItem">
        <div className="menuTitle">읽은 책</div>
        <GetIcon type="read"></GetIcon>
      </li>
      <li className="menuItem">
        <div className="menuTitle">찜한 책</div>
        <GetIcon type="read"></GetIcon>
      </li>
      <li className="menuItem">
        <div className="menuTitle">근처 도서관 찾기</div>
        <GetIcon type="read"></GetIcon>
      </li>
      <li className="menuItem">
        <div className="menuTitle">근처 서점 찾기</div>
        <GetIcon type="read"></GetIcon>
      </li>
      <li className="menuItem">
        <div className="menuTitle">나의 정보</div>
        <GetIcon type="read"></GetIcon>
      </li>
    </ul>
  );
}

export default Menu;
