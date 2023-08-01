import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserSignup from "./components/UserSignup";
import UserSignin from "./components/UserSignin";
import Pokemon from "./components/Pokemon";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import CreatePokemon from "./components/CreatePokemon";
import Navbar from "./components/navbar.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt-token"));

  const handleLogout = () => {
    setLoggedIn(localStorage.removeItem("jwt-token"));
    localStorage.removeItem("jwt-token");
  }
  return (
    <>
      <Router>
        <Navbar handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/signin" element={<UserSignin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/createPokemon" element={<CreatePokemon loggedIn={loggedIn} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
