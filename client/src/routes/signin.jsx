import React from "react";
import Form from "../components/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import auth from "./../services/signin";

class SignIn extends Form {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);

      this.props.history.push("/dashboard");
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
          <h1 className="display-6 text-center my-3">Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email Address")}
            {this.renderInput("password", "Password", "password")}
            <Link
              to="/forgotpassword"
              className="text-decoration-none text-dark my-2"
            >
              Forgot Password?
            </Link>
            {this.renderButton("Sign In")}
          </form>
          <hr />
          <Link to="/signup" className="text-decoration-none text-dark">
            Don’t have an account? Sign up
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
