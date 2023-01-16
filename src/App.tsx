import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Routers from "./Router/Routers";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-100 bg-light">
        <Nav />
        <div className="h-100">
          <Routers />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
