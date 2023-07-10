import React from "react";
import {
  AiFillHome,
  AiFillProfile,
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import {
  MdAddCircleOutline,
  MdChatBubbleOutline,
  MdHome,
  MdMusicVideo,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar shadow navbar-expand-lg justify-content-between bg-transparent px-lg-5">
      <div className="navbar-brand">
        <div className="text-dark fs-3 text-uppercase">Test</div>
      </div>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!localStorage.getItem("token") ? (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-black" to="register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="login">
                  Login
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">
                  <AiOutlineHome className="fs-2 text-warning" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/addPost">
                  <MdAddCircleOutline className="fs-2 text-warning" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/memories">
                  <MdMusicVideo className="fs-2 text-warning" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/searchUser">
                  <AiOutlineSearch className="fs-2 text-warning" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/chat">
                  <MdChatBubbleOutline className="fs-2 text-warning" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/profile">
                  <AiOutlineUser className="fs-2 text-warning" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link text-danger"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  <AiOutlinePoweroff className="fs-2 text-danger" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
