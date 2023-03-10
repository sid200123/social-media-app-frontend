import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Chat from "../pages/Chat";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Memories from "../pages/Memories";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import SearchUser from "../pages/SearchUser";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="memories" element={<Memories />} />
      <Route path="searchUser" element={<SearchUser />} />
      <Route path="chat" element={<Chat />} />
      <Route path="profile" element={<Profile />} />
      <Route path="addPost" element={<AddPost />} />
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
