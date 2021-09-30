import React from "react";
import Form from "../components/form";
import Joi from "joi-browser";
import { signUp } from "../services/signup";
import auth from "../services/signin";

class SignUp extends Form {
  constructor() {
    super();
    this.state = {
      data: {
        name: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const response = await signUp(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      this.props.history.push("/signup/verify-email");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div
          className="container border rounded-3 bg-white py-5 px-3 shadow"
          style={{ width: "20rem" }}
        >
          <h1 className="display-6 text-center my-3">Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "User Name")}
            {this.renderInput("email", "Email Address")}
            {this.renderInput("password", "Password")}
            <hr />
            {this.renderButton("Sign Up")}
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
