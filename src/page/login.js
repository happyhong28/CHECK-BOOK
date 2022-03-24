import * as React from "react";
import "../common/reset.css";
import "../common/common.sass";
import SwitchPage from "../component/switchPage";

function Login({ page }) {
  return (
    <SwitchPage page={page}>
      <div>로그인화면입니다.</div>
    </SwitchPage>
  );
}

export default Login;
