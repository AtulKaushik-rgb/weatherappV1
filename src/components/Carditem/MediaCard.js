import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // display:'flex',
    // alignItems:'center',
    // justifyContent:'center',

  },
  content:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    height:'auto'
  }
});

export default function Cards(props) {


  let data = props.data;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h2" component="h2">
           {data.temp}
          </Typography>
          <Typography variant="h4" color="textSecondary" component="p">
          {`${data.full}`}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
          {`${data.date}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {`Humidity: ${data.humidity}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {`Pressure: ${data.pressure}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
