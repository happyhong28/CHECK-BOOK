import React from "react";
import "../common/reset.css";
import "./style/simpleList.sass";
import Item from "./item";

function SimpleList() {
  return (
    <div className="CPNT-simpleList">
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}

export default SimpleList;
