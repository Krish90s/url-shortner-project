import React from "react";
import Form from "../components/form";
import Joi from "joi-browser";
import { forgotPassword } from "../services/forgot-password";

class ForgotPassword extends Form {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
      },
      errors: {},
    };
  }

  schema = {
    email: Joi.string().email().required().label("Email"),
  };

  doSubmit = async () => {
    try {
      await forgotPassword(this.state.data);
      this.props.history.push("/forgotpassword/verify-reset-link");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
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
          <h1 className="display-6 text-center my-3">Forgot Password</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email Address")}
            <hr />
            {this.renderButton("Email Reset Link")}
          </form>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
