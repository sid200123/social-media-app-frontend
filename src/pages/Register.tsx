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
  const [validateemail, setValidateEmail] = useState<boolean>(false);
  const [validatepassword, setValidatePassword] = useState<boolean>(false);
  const [validateMatchPassword, setValidateMatchPassword] = useState<boolean>(false);

  const emailValidate: RegExp = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const passwordValidate: RegExp = new RegExp(
    "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
  );

  const data: Data = {
    name: name,
    email: email,
    password: password,
  };

  // const validate = (e: any) => {
  //   e.preventDefault();
  //   if (password === confirmPassword) {
  //     setValidateMatchPassword(true);
  //   } else {
  //     setValidateMatchPassword(false);
  //   }
  //   if (emailValidate.test(email)) {
  //     setValidateEmail(true);
  //   } else {
  //     setValidateEmail(false);
  //   }
  //   }
  //   if (passwordValidate.test(password)) {
  //     setValidatePassword(true);
  //   } else {
  //     setValidatePassword(false);
  //   }
  // };

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
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
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
                onChange={(e) => setPassword(e.target.value)}
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
                placeholder="Enter Your Confirm Password"
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success my-4">
                Register
              </button>
              {/* <button onClick={validate} className="btn btn-success my-4">
                Validate
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
