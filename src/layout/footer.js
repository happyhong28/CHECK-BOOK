import * as React from "react";
import "../common/reset.css";
import "./style/layout.sass";
import  SwitchPage from "../component/switchPage";

function Footer({page}) {
  //이 푸터가 메인에 있는 푸터인지, 마이페이지에 있는 푸터인지 알아야
  //페이지를 왔다갔다 할 수 있기 때문에 변수에 따로 저장한다.
  var URL = window.location.href.split("/");
  return (
    <>
      <div className="LAYOUT-footer">
        <SwitchPage page={URL[URL.length-1] == "main" ? "myPage" : "main"}>
          <div className="button" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 48 48"
              // fill="none"
            >
              <path
                d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2486 47.9851 47.985 37.2486 48 24ZM14.9457 35.2028C14.6264 34.9095 14.5217 34.4492 14.6828 34.0466L18.7023 24L14.6828 13.9534C14.521 13.5509 14.625 13.0903 14.9441 12.7965C15.2632 12.5026 15.7308 12.4369 16.1186 12.6313L36.9882 23.0661C37.3172 23.2622 37.5187 23.617 37.5187 24C37.5187 24.383 37.3172 24.7378 36.9882 24.9339L16.1186 35.3687C15.7311 35.5622 15.2644 35.4961 14.9457 35.2028Z"
                // fill="#00C48C"
                // fill="none"
              />
            </svg>
          </div>
        </SwitchPage>
      </div>
    </>
  );
}

//재렌더링 방지
export default React.memo(Footer);
