import React, { useState, useEffect } from "react";
import "./App.css";
import Temperature from "./components/Temperature/Temperature";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/NavBar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import  About  from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import ErrorBoundary from "./container/ErrorBoundary/ErrorBoundary";
import NotFound from "./components/NotFound/NotFound";
import Register from "./User/Register/register"
import Login from "./User/Login/login"

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/notfound" component={NotFound}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Register}></Route>
        </Switch>
      </div>
    </ErrorBoundary>
  );
}

export default App;
