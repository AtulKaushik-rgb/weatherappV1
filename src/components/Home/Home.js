import React, { useState, useEffect } from "react";
import Fallback from "../../container/FallBack/Fallback";
import Temperature from "../Temperature/Temperature";
import "./Home.css";

export const Home = () => {
  const [state, setState] = useState("");
  const [temp, setTemp] = useState({});
  const [showTemp, setShowTemp] = useState(false);
  const API_KEY = "4b4172ab4b6179b66462ef3e8cf4cf04";
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai"];

  const getTemp = () => {

    setShowTemp(false);
    const searchText = document.getElementById("texted").value;

    try {
      const response = fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          searchText +
          "&appid=" +
          API_KEY
      );

      //http://api.openweathermap.org/data/2.5/weather?q=delhi&4b4172ab4b6179b66462ef3e8cf4cf04
      response
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          const status = data.cod;
          const message = data.message;
          console.log(status)
          console.log(message)

          if(status==404)
          {
            
            console.log("inside error 404")
            setShowTemp(false)
            throw Error("City not found")
          //  return <Fallback message = {message}/>
          }
      
          setTemp(data);
          setShowTemp(true);
        });
    } catch (error) {
      console.log("error is thrown", error);
      setShowTemp(false);
      return <Fallback/>;
    }
  };

  return (
    <React.Fragment>
      <div className="input-div">
        <div className="input">
          <input
            className="search"
            autoComplete="off"
            id="texted"
            placeholder="Delhi"
            type="text"
          ></input>
          <i
            className="fa fa-search"
            onClick={() => getTemp()}
            aria-hidden="true"
          ></i>
        </div>
      </div>
      {showTemp ? <Temperature temp={temp} /> : null}
    </React.Fragment>
  );
};
