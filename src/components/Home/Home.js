import React, { useState} from "react";
import Fallback from "../../container/FallBack/Fallback";
import Temperature from "../Temperature/Temperature";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles, Typography} from "@material-ui/core"
import Grid from '@material-ui/core/Grid'

const Home = () => {
  const [temp, setTemp] = useState({});
  const [showTemp, setShowTemp] = useState(false);
  const [searchText, setSearchText] = useState("");
  const {REACT_APP_API_URL} = process.env;
  console.log(REACT_APP_API_URL);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const useStyles = makeStyles({
    root: {
    },
    Title:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    backdrop: {
      zIndex:  1,
      color: '#fff'
    },
    search:{
      width:'50vw',
      height:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:'10px auto'
    },
    textField:{
      width:'100%',
      marginBottom:'15px'
    },
    container:{
      height:'8vh'
      },

  });

  const getTemp = async (e) => {
    e.preventDefault();
    handleToggle();
    debugger;
    setShowTemp(false);
    //let key = process.env.REACT_APP_API_URL.toString();
    let key1 = 'ee5669bc40a8113e9169782767118af3';

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=${key1}`
      );
      debugger;
      setTemp(response.data.list);
      handleClose();
      setShowTemp(true);
      
    } catch (error) {
      console.log("error is thrown", error);
      setShowTemp(false);
      return <Fallback />;
    }
  };

  const classes = useStyles();


  return (
    <>
    <Grid container spacing={2} className={classes.Title}>
    <Typography  variant="h2" color="textSecondary" component="p">
        WeatherApp
      </Typography>
    </Grid>

      <div className={classes.container}>
        <div className={classes.search}>
          <Grid container>
            <Grid item xs={12}>
              <form noValidate autoComplete="off" onSubmit={getTemp}>
                {/* <TextField id="outlined-search" label="Search field" type="search" variant="outlined" /> */}
                <TextField
                  className={classes.textField}
                  type="search"
                  label="Search by city name"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {showTemp ? <Temperature temp={temp} /> : null}
    </>
  );
};

export default Home;
