import React from "react";
import { Route, Switch, Redirect } from "react-router";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";
import ForgotPassword from "./routes/forgotpassword";
import ResetPassword from "./routes/resetpassword";
import VerifyEmail from "./routes/verifyemail";
import VerifyResetLink from "./routes/password-reset-link";
import Dashboard from "./routes/dashboard";
import Logout from "./routes/logout";
import "./App.css";

function App() {
  return (
    <main className="">
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/resetpassword/:id" component={ResetPassword} />
        <Route
          path="/forgotpassword/verify-reset-link"
          component={VerifyResetLink}
        />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/signup/verify-email" component={VerifyEmail} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Redirect from="/" exact to="/signin" />
      </Switch>
    </main>
  );
}

export default App;
