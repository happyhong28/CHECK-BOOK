import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.sass';
import SignIn from "./page/signIn";
import Main from "./page/main";
import MyPage from "./page/myPage";
import NotFound from "./page/notFound";
import SignUp from "./page/signUp";


function GoSignIn() {
  return (
      <SignIn page="signUp"></SignIn>
  );
}

function GoSignUp() {
  return (
      <SignUp page=""></SignUp>
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
            <Route exact path="/" element={<GoSignIn />} />
            <Route exact path="/signUp" element={<GoSignUp />} />
            <Route exact path="/main" element={<GoMain />} />
            <Route exact path="/myPage" element={<GoMyPage />} />
            <Route exact path={"*"} element={<Go404 />}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
