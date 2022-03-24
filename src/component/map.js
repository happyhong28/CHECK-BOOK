import React, { useRef, useEffect } from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/map.sass";

/*global kakao*/

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 4,
    };

    let map = new window.kakao.maps.Map(container, options);


    const markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map); // 지도에 마커를 띄우기 위한 코드
  });


  return <div id="map" className="CPNT-map"></div>;


};

export default Map;
