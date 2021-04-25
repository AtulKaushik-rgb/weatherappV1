import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../Carditem/MediaCard";
import uuid from 'react-uuid';


const Temperature = React.memo((props) => {
  let list = props;
  console.log('loading...');

// .main.   feels_like: 304.77
// grnd_level: 994
// humidity: 50
// pressure: 1007
// sea_level: 1007
// temp: 303.53
// temp_kf: 0.65
// temp_max: 303.53
// temp_min: 302.88

  let Dates = list.temp.map((item) =>
  {
    return{
      date: new moment.unix(item.dt).format("Do MMM, YY"),
      full:new moment.unix(item.dt).format("dddd"),
      temp: Math.floor(item.main.temp - 273.15)+'°C',
      temp_max: Math.floor(item.main.temp_max - 273.15)+'°C',
      temp_min: Math.floor(item.main.temp_min - 273.15)+'°C',
      humidity:item.main.humidity,
      pressure:item.main.pressure
    }
  }
 );

 const unique = [...new Map(Dates.map(item => [item['date'], item])).values()]

  return (
    <div>
      <Grid
        container
        alignContent={"center"}
        justify={"center"}
        spacing={2}
        direction={"column"}
      >
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          <Grid container spacing={4}>
            {unique.map((item) => (
              <Grid key={uuid()} item xs={12} sm={6} md={4} lg={4}>
                <MediaCard data={item}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1}></Grid>
      </Grid>
      {/* <Grid direction = {"column"} xs={2} lg={2} md={3}></Grid> */}
    </div>
  );
});

export default Temperature;
