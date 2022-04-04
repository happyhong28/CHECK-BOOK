import * as React from "react";
import "../common/reset.css";
// import "../common/common.sass";
import "./style/layout.sass";

// 컴포넌트 안에 컴포넌트를 넣을 때
// 이렇게 children을 활용해야
// 안에 있는 컴포넌트의 내용이 잘 출력된다.
function Body({ children }) {
  return <div className="LAYOUT-body">{children}</div>;
}

export default Body;
