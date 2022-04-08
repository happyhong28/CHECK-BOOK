import React, { useState, useRef, useEffect } from "react";
import "../common/reset.css";
import "./style/map.sass";
import LibraryLocation from "../api/libraryLocation.json";
import BookStoreLocation from "../api/bookstoreLocation.json";


/*global kakao*/

const { kakao } = window;

  //거리 구하는 함수
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

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }


  var POSITIONS = [];
  var TYPE = "";
  var DISTANCE = 2000; //반경 몇키로 이내일지
  var LIST = [];

  const getCurrentLocation = () => {

    POSITIONS = [];
    // HTML5의 geolocation으로 사용할 수 있는지 체크
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻기
      navigator.geolocation.getCurrentPosition(
        //success
        function (position) {

          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도

          var position = {
            content: `<div style="padding:5px;font-size:12px;">${"현재위치"}</div>`,
            latlng: new kakao.maps.LatLng(lat, lon)
          };
          POSITIONS = [...POSITIONS, position];
          TYPE == "library" ? getLibLocation(LibraryLocation.records, lat, lon) : getStoreLocation(BookStoreLocation, lat, lon);
        },
        //error
        function () {
          alert("위치 엑세스 허용 해주세요....");

          var position = {
            content: `<div style="padding:5px;font-size:12px;">${"임시위치"}</div>`,
            latlng: new kakao.maps.LatLng(37.481584308949834, 126.95325457509638)
          };
          POSITIONS = [...POSITIONS, position];

          TYPE == "library" ? getLibLocation(LibraryLocation.records, 37.481584308949834, 126.95325457509638) : getStoreLocation(BookStoreLocation, 37.481584308949834, 126.95325457509638);
        }

      );
    }
  }

  const getLibLocation = (data, lat, lon) => {

    data.map((item) => {
      if (getDistance(lat, lon, item["위도"], item["경도"]) <= DISTANCE) {
        // console.log(item);
        var position = {
          content: `<div style="padding:5px;font-size:12px;">${item['도서관명']}</div>`,
          latlng: new kakao.maps.LatLng(item["위도"], item["경도"]),
          info: {
            lat: item["위도"],
            lng: item["경도"],
            title: item["도서관명"], //도서관명
            distance: getDistance(lat, lon, item["위도"], item["경도"])
          }
        };
        POSITIONS = [...POSITIONS, position];
      }
    });
    POSITIONS.sort((a, b) => { return a.info != undefined && b.info != undefined ? a.info.distance - b.info.distance : false; });
    drawMarker(POSITIONS);
  }

  const getStoreLocation = (data, lat, lon) => {

    data.map((item) => {
      if (getDistance(lat, lon, item["y"], item["x"]) <= DISTANCE) {
        // console.log(item);
        var position = {
          content: `<div style="padding:5px;font-size:12px;">${item['poi_nm']}</div>`,
          latlng: new kakao.maps.LatLng(item["y"], item["x"]),
          info: {
            lat: item["y"], //위도
            lng: item["x"], //경도
            title: item["poi_nm"], //서점명
            sido_nm: item["sido_nm"], //서울특별시
            sgg_nm: item["sgg_nm"], //강남구
            rd_nm: item["rd_nm"], //강남대로154길
            distance: getDistance(lat, lon, item["y"], item["x"])
          }
        };
        POSITIONS = [...POSITIONS, position];
      }
    });

    //거리가 가까운 순으로 정렬
    POSITIONS.sort((a, b) => { return a.info != undefined && b.info != undefined ? a.info.distance - b.info.distance : false; });
    drawMarker(POSITIONS);
  }

  function drawMarker(positions) {
    LIST = [];
    // setList([]);

    const $container = document.getElementById("map");

    let options = {
      center: positions[0].latlng,
      level: 4,
    };

    let map = new window.kakao.maps.Map($container, options);

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
        image: i == 0 ? "" : markerImage // 마커 이미지 (현재위치를 나타내는 마커는 기본이미지로 유지)
      });

      // 마커에 표시할 인포윈도우를 생성합니다 
      var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

      if (i != 0) { LIST = [...LIST, { marker: marker, title: positions[i].info.title }] }
      // if (i != 0) { setList([...list, { marker: marker, title: positions[i].info.title }]) }
    }

    // console.log(list);
    marker.setMap(map); // 지도에 마커를 띄우기 위한 코드
  }


const Map = ({ type }) => {
  console.log("Map is Ready!");
  TYPE = type;

  const [list, setList] = useState([]);


  useEffect(() => {
    getCurrentLocation();
  });


  // useEffect(() => {
  //   // getCurrentLocation();
  //   // console.log(LIST);
  //   // console.log(list);

  // }, [list]);

  return (
    <div className="CPNT-map">
      <div className="buttons">
        <span>반경(km)</span>
        <button className="">1</button>
        <button className="active">2</button>
        <button className="">5</button>
        <button className="btn_fold">접</button>
      </div>
      <div id="map" className="map">
        <div id="list" className="list">
          <div className="result">총 {LIST.length}개의 검색결과</div>
          {
            LIST.map((item, index) => {
              return <div key={index} className="item">{item.title}</div>
            })
          }
           {/* <div className="result">총 {list.length}개의 검색결과</div>
          {
            list.map((item, index) => {
              return <div key={index} className="item">{item.title}</div>
            })
          } */}
        </div>
      </div>

    </div>

  );
};

export default Map;
