// 페이지를 이동할 때 사용하는 함수
import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function SwitchPage({page, children}) {
    console.log(`Go To ${page} 🚀`);
    return (
      <Link to={`/${page}`}>
          {children}
      </Link>
    );
  }
export default SwitchPage;