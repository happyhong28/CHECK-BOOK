import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.sass';
import Login from "./page/login";
import Main from "./page/main";
import MyPage from "./page/myPage";
import NotFound from "./page/notFound";


function GoLogin() {
  return (
      <Login page="main"></Login>

  );
}

function GoMain() {
  return (
      <Main page="myPage"></Main>
  );
}

function GoMyPage() {
  return (
      <MyPage page="main"></MyPage>
  );
}

function Go404() {
  return (
      <NotFound></NotFound>
  );
}



function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<GoLogin />} />
            <Route exact path="/main" element={<GoMain />} />
            <Route exact path="/myPage" element={<GoMyPage />} />
            <Route exact path={"*"} element={<Go404 />}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
