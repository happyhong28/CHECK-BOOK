import * as React from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/searchBar.sass";
import Select from "../core/select";
import Input from "../core/input";
import Icon from "./icon";

function SearchBar() {
  return (
    <div className="CPNT-searchBar">
      <Select></Select>
      <Input></Input>
      <Icon className="icon" type="search"></Icon>
    </div>
  );
}

export default SearchBar;
