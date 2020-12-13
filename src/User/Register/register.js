import React from "react";
//import './register.css'

const register = () => {
    console.log("inside register.js")
  return (
    <div className="register">
      <input className="input" type="text" placeholder="UserName"></input>
      <input className="input" type="email" placeholder="Email"></input>
      <input
        className="password"
        type="password"
        placeholder="Password"
      ></input>
      <button className="button" type="button">
        Register!
      </button>
      <a href="/login">login?</a>
    </div>
  );
};

export default register;
