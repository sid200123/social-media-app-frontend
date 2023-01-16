import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Routers from "./Router/Routers";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="h-100 img img-fluid"
        style={{
          backgroundImage:
          "url(https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=826&t=st=1673870797~exp=1673871397~hmac=3d77be7d83d3210272e6d62b63a2c0dd11bf06229bd8d31409d343f4e2aa8ecc)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Nav />
        <div className="h-100">
          <Routers />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
