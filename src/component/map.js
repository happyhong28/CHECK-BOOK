import React, { useRef, useEffect } from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/map.sass";

/*global kakao*/
class Map extends React.Component {
  componentDidMount = () => {
    //컴포넌트가 마운트 되자마자 상위 컴포넌트에서 받아 온 매장 위도와 경도의 값으로 initMap 함수를 실행시킨다.
    const { storeCoordinate } = this.props;

    // this.initMap(storeCoordinate[0], storeCoordinate[1]);
    this.initMap(37.365264512305174, 127.10676860117488);
    //props로 받아오는 위도와 경도 값이 배열에 들어있기 때문에 위처럼 사용했다.
  };

  initMap = (lat, lng) => {
    const script = document.createElement("script");
    //head태그 안에 스크립트 api를 바로 넣어도 되지만 필요한 부분에만 넣어주기 위해 script라는 이름의 요소를 생성했다.

    const API_APP_KEY = "92507e2c7c15cc4f494273f1d326184d";
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_APP_KEY}&autoload=false`;
    document.head.appendChild(script);
    //위에서 만든 script 요소 안에 실제로 api를 불러오기 위해 필요한 값을 넣고 head태그 안에 붙여주었다.

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");

        const options = {
          center: new kakao.maps.LatLng(lat, lng), //띄울 지도의 위도와 경도값
          level: 4 //지도의 확대 정도
        };

        const map = new window.kakao.maps.Map(container, options);
        //여기까지가 실제 지도를 띠우기 위해 필요한 코드 부분인데 이 부분은 카카오의 설명 페이지를 참고하면 쉽게 작성할 수 있다.

        const markerPosition = new kakao.maps.LatLng(lat, lng);
        const marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
        // 지도에 마커를 띄우기 위한 코드 부분이다. 위도와 경도 값을 넣어주고 실행시키면 된다.
      });
    };
  };

  render() {
    return <div id="map" className="CPNT-map"></div>; //지도가 들어갈 자리
  }
}

export default Map;
