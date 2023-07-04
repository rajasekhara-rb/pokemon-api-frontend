import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserSignup from "./components/UserSignup";
import UserSignin from "./components/UserSignin";


function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/signin" element={<UserSignin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
