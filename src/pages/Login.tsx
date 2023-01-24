import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Data {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const data: Data = {
    email: email,
    password: password,
  };

  const loginData = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/login", data).then((result) => {
      if (result.data.auth) {
        localStorage.setItem("userId", result.data.data[0].id);
        localStorage.setItem("token", result.data.auth);
        console.log(result.data);
        setEmail("");
        setPassword("");
        navigate("/");
      }
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="card text-black mb-5 w-50 bg-transparent shadow border-0">
        <div className="card-header border-0">
          <div className="card-title text-center display-6">Login Form</div>
        </div>
        <div className="card-body">
          <form
            className="form"
            onSubmit={(e) => {
              loginData(e);
            }}
          >
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary my-4">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
