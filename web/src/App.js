import React, { Component } from "react";
import { Router } from "@reach/router";
import axios from "axios";

import LandingPage from "./pages/landingPage";
import Dashboard from "./pages/dashboard";
import AdminSearchPage from "./pages/adminSearchPage";

class App extends Component {
  constructor(props) {
    super(props);
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    this.state = {
      isLoggedIn: !!auth ? true : false,
      currentUser: null,
      userId: ""
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) return;

    axios
      .get(`/api/users/${auth.userId}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then(response => {
        this.setState({
          currentUser: response.data,
          isLoggedIn: true,
          userId: auth.userId
        });
      });
  }

  handleLogin(email, password) {
    axios
      .post(`/api/auth/get_token`, {
        email: email,
        password: password
      })
      .then(response => {
        sessionStorage.setItem('auth', JSON.stringify(response.data));
        this.getUser();
      })
      .catch(err => {
        alert(err)
      });
  }

  handleLogout() {
    sessionStorage.setItem("auth", null);
    this.setState({ currentUser: null, isLoggedIn: false });
    window.location.href = "/"
  }
  render() {
    const userProps = {
      userId: this.state.userId,
      isLoggedIn: this.state.isLoggedIn,
      currentUser: this.state.currentUser,
      logout: () => this.handleLogout(),
      login: (email, pass) => this.handleLogin(email, pass)
    };

    return (
        <Router>
          <LandingPage path="/" user={userProps} />
          {/* <LandingPage path="/" user={userProps} /> */}
          <Dashboard path="dashboard/" user={userProps} />
          {/* <Dashboard path="dashboard/" user={userProps} /> */}
          <AdminSearchPage path="admin/" user={userProps} />
          {/* <AdminSearchPage path="admin/" user={userProps} /> */}
        </Router>
    );
  }
}

export default App;