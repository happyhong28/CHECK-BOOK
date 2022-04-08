## Check Book

### 프로젝트 일정 및 순서

#### 1. 웹 디자인 (2022/03/13 ~ 2022/03/16)
- figma 활용

#### 2. 퍼블리싱 (2022/03/17 ~ 2022/03/22)
- 구글링하면서 직접 퍼블리싱 
- 일부 mui 라이브러리 활용

#### 3. 개발 (2022/03/23 ~ 2022/03/)
##### 3.1 프로젝트 구조 설계 
- public => assets 파일 관리 ✔
- component  => 공통 컴포넌트 관리 ✔   
- hook => 공통 hooks 관리 ✔  
- layout => 레이아웃 틀 컴포넌트 관리 ✔
- core => input, button과 같은 기본적인 것들 관리 ✔
- page  => router 페이지 관리(Head 정보및 SSR 관리) ✔
- common  => 공통적으로 사용되는 것들을 관리 ✔
- modules => api feature 단위 관리
- typings => declare, global 타입 관리(컴포넌트는 해당 파일 안에서 interface 타입으로 관리)
- utils => 중복 로직 함수들을 pure 함수화 하여 util 파일 관리
- views => pages 폴더에서 사용하는 페이지 뷰 컴포넌트 관리(일반 페이지 파일과 같다)



<프로젝트 구조설계 참고 링크>
- https://ventos06.tistory.com/4
- https://kyuhyuk.kr/article/react/2021/10/04/React-Best-Practice
</br>

<네이밍 규칙 참고>
- https://doodreamcode.tistory.com/176
- 보통 어딘가에서 import 될 확률이 있는 파일들 앞에 _ 를 붙인다.


-------------------------------------------
#### 메모장
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; 
import React, { useState, useEffect ,useRef,useMemo ,useRef} from 'react';

TO-DO
1. 도서관 서점 데이터 이상한거 해결하기
2. 호버하면 위도경도 센터 바뀌게 하기
3. 반경 선택 적용하기
2. 시멘틱에러 검색 시 3권 이하면 밑에 바디 쪽 이상한거 해결하기
3. 회원정소 수정창 만들기
4. 기획 파일 만들기
5. 피그마 수정하기
6. 리드미 정리하기


<React.StrictMode>
<App />,
</React.StrictMode>,

카카오 로그인 api 사용할 때 그 토큰을 그대로 사용하면 안된다.
해킹 위험이 있으므로 나의 전용 토큰으로 바꿔줘야함 (아래 링크 참고!)
https://data-jj.tistory.com/53




데이터 출처 
전국 도서관 위치 정보 https://www.data.go.kr/data/15013109/standard.do
전국 서점 위치 정보 https://www.bigdata-culture.kr/bigdata/user/data_market/detail.do?id=33660160-404b-11eb-af9a-4b03f0a582d6