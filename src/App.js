import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserSignup from "./components/UserSignup";
import UserSignin from "./components/UserSignin";
import Pokemon from "./components/Pokemon";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import CreatePokemon from "./components/CreatePokemon";


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt-token"));
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/signin" element={<UserSignin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword/>} />
          <Route path="/createPokemon" element={<CreatePokemon/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
