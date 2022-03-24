### Check Book

1. 프로젝트 구조 설계
  |-- public => assets 파일 관리 ✔
  |-- component  => 공통 컴포넌트 관리 ✔ 
  |-- hook => 공통 hooks 관리 ✔
  |-- layout => 레이아웃 틀 컴포넌트 관리 ✔
  |-- core => input, button과 같은 기본적인 것들 관리 ✔
  |-- page  => router 페이지 관리(Head 정보및 SSR 관리) ✔
  |-- common  => 공통적으로 사용되는 것들을 관리 ✔
  |-- modules => api feature 단위 관리
  |-- typings => declare, global 타입 관리(컴포넌트는 해당 파일 안에서 interface 타입으로 관리)
  |-- utils => 중복 로직 함수들을 pure 함수화 하여 util 파일 관리
  |-- views => pages 폴더에서 사용하는 페이지 뷰 컴포넌트 관리(일반 페이지 파일과 같다)


<프로젝트 구조설계 참고>
https://ventos06.tistory.com/4
https://kyuhyuk.kr/article/react/2021/10/04/React-Best-Practice

<네이밍 규칙 참고>
https://doodreamcode.tistory.com/176
* 보통 어딘가에서 import 될 확률이 있는 파일들 앞에 _ 를 붙인다고 한다.


