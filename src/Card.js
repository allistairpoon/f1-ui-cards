import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const SimpleCard = (data) => {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
  console.log("debug" + JSON.stringify(data))

  return (
        <Card 
            raised
            sx={{
                maxWidth: 280,
                margin: "0 auto",
                padding: "0.1em",
            }}
            className={classes.root}
        >
        <CardMedia
            component="img"
            height="250"
            image={data.image}
            alt="Chevrolet"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
            {/* <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            >
            Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            adjective
            </Typography> */}
            <Typography variant="body2" component="p">
            {data.title}
            <br />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">{data.topic}</Button>
        </CardActions>
    </Card>
  );
};

export default SimpleCard;
