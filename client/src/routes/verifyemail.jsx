import React from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="bg-white min-vh-100 d-flex align-items-center justify-content-center">
      <div
        className="container border rounded-3 bg-light py-3 px-3"
        style={{ width: "40rem" }}
      >
        <p className="my-auto">
          Verify your account by clicking on the link sent to your Email Id{" "}
          <Link className="btn btn-primary my-2 ms-5" to="/">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
