import React, { useRef, useEffect } from "react";
import "../common/reset.css";
import "./style/map.sass";
import LibraryLocation from "../api/libraryLocation.json";

// console.log(LibraryLocation);

/*global kakao*/

const { kakao } = window;

const container = document.getElementById("map");

function getDistance(lat1, lon1, lat2, lon2) {
  if ((lat1 == lat2) && (lon1 == lon2))
    return 0;

  var radLat1 = Math.PI * lat1 / 180;
  var radLat2 = Math.PI * lat2 / 180;
  var theta = lon1 - lon2;
  var radTheta = Math.PI * theta / 180;
  var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1)
    dist = 1;

  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  return dist;
  //dist가 2,000 --> 2km를 의미
}


var positions = [];


const getLibLocation = (data, lat, lon) => {
  data.map((item) => {
    // console.log(getDistance(lat,lon,item["위도"],item["경도"]));
    // getDistance(lat,lon,item["위도"],item["경도"]) <= 2000 ?  console.log("asd") : false;


    if (getDistance(lat, lon, item["위도"], item["경도"]) <= 2000) {
      var position = {
        title: item['도서관명'],
        latlng: new kakao.maps.LatLng(item["위도"], item["경도"])
      };
      // console.log(getDistance(lat, lon, item["위도"], item["경도"]));
      positions = [...positions, position];

    }

  });
  console.log(positions);

  // 마커 이미지의 이미지 주소입니다
  var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  for (var i = 0; i < positions.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage // 마커 이미지 
    });
  }

}

const getCurrentLocation = () => {
     // HTML5의 geolocation으로 사용할 수 있는지 체크
     if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻기
      navigator.geolocation.getCurrentPosition(
        //success
        function (position) {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도

          let options = {
            center: new window.kakao.maps.LatLng(lat, lon),
            level: 4,
          };

          let map = new window.kakao.maps.Map(container, options);

          //현재 위치 마킹
          const markerPosition = new kakao.maps.LatLng(lat, lon);
          const marker = new kakao.maps.Marker({ position: markerPosition });
          
          //반경 2km 내의 도서관 위치 마킹
          getLibLocation(LibraryLocation.records, lat, lon);
          marker.setMap(map); // 지도에 마커를 띄우기 위한 코드
        },
        //error
        function () {
          alert("위치 엑세스 허용 해주세요....");

          //현재 위치를 받아오지 못할 때 기본값
          let options = {
            center: new window.kakao.maps.LatLng(37.481584308949834, 126.95325457509638),
            level: 4,
          };
          let map = new window.kakao.maps.Map(container, options);
        }

      );
    }
}


const Map = () => {
  useEffect(() => {

    getCurrentLocation();

  });

  return <div id="map" className="CPNT-map"></div>;
};

export default Map;
