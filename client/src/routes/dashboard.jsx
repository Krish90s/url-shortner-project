import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { getMe } from "../services/userprofile";
import auth from "../services/signin";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import UrlShortner from "./urlshortner";
import UrlsList from "./urllist";
import NotFound from "./not-found";
import { Route, Switch, Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    const { data: user } = await getMe();
    this.setState({ user });
    console.log(this.state.user);
  }
  render() {
    return (
      <div className="position-absolute" id="wrapper">
        <Navbar user={this.state.user} />
        <Sidebar />
        <div className="content position-absolute overflow-hidden">
          <Switch>
            <Route path="/dashboard/not-found" component={NotFound} />
            <Route path="/dashboard/urllists" component={UrlsList} />
            <Route path="/dashboard/urlshortner" component={UrlShortner} />
            <Redirect from="/dashboard" exact to="/dashboard/urlshortner" />
            <Redirect to="/dashboard/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
