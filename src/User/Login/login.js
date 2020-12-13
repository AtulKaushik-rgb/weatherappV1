import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import App from "../../App";

//import "./login.css";

export default class login extends Component {
  state = { input: "", password: "", redirected: false };
  render() {
    const dataHandler = () => {
      //fconsole.log(this.state)

      this.setState({ ...this.state, redirected: true });
    };
    const inputChangeHandler = (e) => {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    };
    const passwordChangeHandler = (e) => {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    let currentView = null;

    if (this.state.redirected) currentView = <App />;
    else
      currentView = (
        <div className="login">
          <input
            className="input"
            type="text"
            name="input"
            value={this.state.input}
            onChange={inputChangeHandler}
            placeholder="User"
          ></input>
          <input
            className="password"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={passwordChangeHandler}
          ></input>
          <button className="button" type="button" onClick={dataHandler}>
            Login!
          </button>
          <NavLink to="/register">Register?</NavLink>
          {/* <a href="/register">Register?</a> */}
        </div>
      );

    return (currentView)  ;
  }
}
