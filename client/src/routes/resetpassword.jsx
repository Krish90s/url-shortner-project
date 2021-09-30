import React from "react";
import Form from "../components/form";
import Joi from "joi-browser";
import { resetPassword } from "../services/reset-password";
import jwtDecode from "jwt-decode";

class ResetPassword extends Form {
  constructor() {
    super();
    this.state = {
      data: {
        password: "",
        email: "",
      },
      errors: {},
    };
  }

  schema = {
    password: Joi.string().required().label("Password"),
    email: Joi.string().required(),
  };

  componentDidMount() {
    let jwt = this.props.match.params.id;
    const user = jwtDecode(jwt);
    this.state.data.email = user.sub;
    console.log(this.state.data);
  }

  doSubmit = async () => {
    try {
      await resetPassword(this.state.data);
      this.props.history.push("/signin");
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
          <h1 className="display-6 text-center my-3">Reset Password</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("password", "Password", "password")}
            <hr />
            {this.renderButton("Reset Password")}
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
