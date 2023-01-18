import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

interface Data {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const data: Data = {
    name: name,
    email: email,
    password: password,
  };

  const registerData = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("register data");
    await axios.post("http://localhost:5000/register", data).then((result) => {
      console.log(result.data.result);
      if (result.data.auth) {
        localStorage.setItem("token", result.data.auth);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
      if (result.data.err) {
        swal("Error", `Email Already Registered`, "error");
      }
    });
  };
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="card text-black mb-5 w-50 bg-transparent shadow border-0">
        <div className="card-header border-0">
          <div className="card-title text-center display-6">Register Form</div>
        </div>
        <div className="card-body">
          <form
            className="form"
            onSubmit={(e) => {
              registerData(e);
            }}
          >
            <div className="form-group my-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Your Password"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Enter Your Confirm Password"
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success my-4">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
