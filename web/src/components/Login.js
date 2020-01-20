import React, { Component } from "react";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onLoginClick() {
        this.props.user.login(this.state.email, this.state.password);
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        return (
        <div style={{
            display: 'flex', 
            flexDirection: 'row'
        }}>
              <label htmlFor="email"></label>
              <input 
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleEmailChange}
              />
  
              <label htmlFor="password"></label>
              <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handlePasswordChange}
              />
            
            <button value="Login" className="login-button" onClick={() => this.onLoginClick() }>LOGIN</button>
            
        </div>

    )}}

    export default Login;