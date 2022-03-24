import React from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/item.sass";

function Item() {
  return (
    <div className="CPNT-item">
      <img
        className="img"
        src="http://image.yes24.com/Goods/105526047/XL"
      ></img>
      <div className="title">
        물고기는 존재하지 않는다. 물고기는 존재하지 않는다.{" "}
      </div>
      <svg
        className="remove"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M47.0642 16.9358C45.8161 15.6881 43.793 15.6881 42.5449 16.9358L32.02 27.4606L21.4952 16.9358C20.2411 15.7245 18.2476 15.7419 17.0148 16.9747C15.7819 18.2076 15.7646 20.201 16.9758 21.4551L27.5007 31.98L16.9758 42.5049C16.145 43.3073 15.8117 44.4957 16.1042 45.6131C16.3967 46.7306 17.2694 47.6033 18.3869 47.8958C19.5044 48.1883 20.6927 47.855 21.4952 47.0242L32.02 36.4993L42.5449 47.0242C43.799 48.2354 45.7924 48.2181 47.0253 46.9852C48.2581 45.7524 48.2755 43.7589 47.0642 42.5049L36.5393 31.98L47.0642 21.4551C48.3119 20.207 48.3119 18.1839 47.0642 16.9358Z"
          fill="#1A051D"
        />
      </svg>
    </div>
  );
}

export default Item;
