import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Memories from "../pages/Memories";
import Register from "../pages/Register";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='memories' element={<Memories/>} />
      {!localStorage.getItem("token") && (
        <Route path="login" element={<Login />} />
      )}
      {!localStorage.getItem("token") && (
        <Route path="register" element={<Register />} />
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routers;
