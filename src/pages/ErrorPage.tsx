import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex d-flex-coulmn justify-content-center align-items-center h-100">
      <div className="text-center">
      <h1>Page Not Found 404</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-link"
      >
        Go Back To Home Page
      </button>
      </div>
    </div>
  );
};

export default ErrorPage;
