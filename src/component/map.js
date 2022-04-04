import React, { useRef, useEffect } from "react";
import "../common/reset.css";
// import "../common/common.sass";
import "./style/map.sass";
// import { libraryLocation } from "../api/libraryLocation"; 

/*global kakao*/

const { kakao } = window;

// console.log(libraryLocation);


const Map = () => {

  useEffect(() => {
    // HTML5의 geolocation으로 사용할 수 있는지 체크
    let container = document.getElementById("map");

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도

        let options = {
          center: new window.kakao.maps.LatLng(lat, lon),
          level: 4,
        };

        let map = new window.kakao.maps.Map(container, options);

        // 마커와 인포윈도우를 표시합니다
        const markerPosition = new kakao.maps.LatLng(lat, lon);
        const marker = new kakao.maps.Marker({ position: markerPosition });
        marker.setMap(map); // 지도에 마커를 띄우기 위한 코드
      }, function () {
        alert("위치 엑세스 허용 해주세요....");

        let options = {
          center: new window.kakao.maps.LatLng(37.481584308949834, 126.95325457509638),
          level: 4,
        };
        let map = new window.kakao.maps.Map(container, options);
      });
    }


  });
  return <div id="map" className="CPNT-map"></div>;
};

export default Map;
