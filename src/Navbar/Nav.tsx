import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
                <Link
                  to="/register"
                  className="nav-link text-danger mx-4"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
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
