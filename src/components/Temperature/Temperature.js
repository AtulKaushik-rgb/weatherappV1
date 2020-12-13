import React from "react";
import "./Temperature.css";
import "font-awesome/css/font-awesome.min.css";
import { Redirect } from "react-router-dom";

const Temperature = (props) => {
  console.log(props);
  const {
    temp: {
      cod,
      main: { temp, feels_like, humidity, temp_max, temp_min },
      wind: { speed },
      sys: { sunrise, sunset },
      visibility,
    },
  } = props;

  const getDateFromUXTime = (unix_timestamp) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  };

  let tempDisplay = null;

  if(parseInt(cod)==200)
  {
    console.log(cod)
    tempDisplay = (<React.Fragment>
      <h1>{Math.round(temp - 273)}°C</h1>
      <div className="item">
        <div className="LeftDiv">
          <div className="div-item">
            <h3>Humidiity</h3>
            <br />
            <span className="div-text">
              <h3>{humidity}%</h3>
            </span>
          </div>
          <div className="div-item">
            <h3>Wind Speed</h3>
            <br />
            <span className="div-text">
              <h3>{speed} km/hr</h3>
            </span>
          </div>
          <div className="div-item">
            <h3>Feels Like</h3>
            <br />
            <span className="div-text">
              <h3>{Math.round(feels_like - 273)}°C</h3>
            </span>
          </div>
          <div className="div-item">
            <h3>Max Temp</h3>
            <br />
            <span className="div-text">
              <h3>{Math.round(temp_max - 273)}°C</h3>
            </span>
          </div>
        </div>
        <div className="RightDiv">
          <div className="div-item">
            <h3>Min Temp</h3>
            <br />
            <span className="div-text">
              <h3>{Math.round(temp_min - 273)}°C</h3>
            </span>
          </div>
          <div className="div-item">
            <h3>Visibility</h3>
            <br />
            <span className="div-text">
              <h3>{Number.parseInt(visibility)} Meters</h3>
            </span>
          </div>
          <div className="div-item">
            <h3>Sunrise</h3>
            <br />
            <span className="div-text">
              <h3>{getDateFromUXTime(sunrise)}</h3>
            </span>
          </div>
          <div className="div-item">
            <h3>Sunset</h3>
            <br />
            <span className="div-text">
              <h3>{getDateFromUXTime(sunset)}</h3>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>)
  }
  else
  {
    tempDisplay =   (<Redirect to ="/notfound"></Redirect>)
  }

  return (
    {tempDisplay}
      );
};

export default Temperature;
