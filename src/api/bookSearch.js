import axios from "axios";
// require('dotenv').config(); //CREATE_REACT_APP 으로 프로젝트를 생성했으면 이미 포함되어 있어서 따로 선언할 필요 없다.

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK " + process.env.REACT_APP_KAKAO_REST
  },
});


export const bookSearch = params => {
    return Kakao.get("/v3/search/book", { params });
};
