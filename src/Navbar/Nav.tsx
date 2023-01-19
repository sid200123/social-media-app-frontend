import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar shadow navbar-expand-lg justify-content-between bg-transparent px-5">
      <div className="navbar-brand">
        <div className="text-primary">Social Media App</div>
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/memories">
                  Memories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/searchUser">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/chat">
                  Chat
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
                  Logout
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
