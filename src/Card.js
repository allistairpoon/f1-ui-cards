import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import PlayArrow from "@mui/icons-material/PlayArrow";
import PieChartIcon from "@mui/icons-material/PieChart";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = (data) => {
  const classes = useStyles();
  console.log("data: " + JSON.stringify(data));

  return (
    <Card sx={{ minHeight: "280px", width: 220 }}>
      <CardCover>
        <img src={data.image} srcSet={data.image} loading="lazy" alt="" />
      </CardCover>
      <CardCover />
      <CardContent>
        <IconButton
          disabled="true"
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          {data.icon === "play" && <PlayArrow style={{ color: "white" }} />}
          {data.icon === "pie" && <PieChartIcon style={{ color: "white" }} />}
        </IconButton>
      </CardContent>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography
          level="title-lg"
          textColor="#fff"
          style={{ fontSize: "12px" }}
        >
          {data.title}
        </Typography>
        <Divider inset="none" />
        <CardActions>
          <Button
            component="a"
            variant="solid"
            color="neutral"
            size="sm"
            href={data.link}
            target="_blank"
            style={{ fontSize: "10px" }}
          >
            {data.topic}
          </Button>
          <Typography
            fontSize="10px"
            textColor="#fff"
            textAlign="right"
            sx={{ position: "absolute", right: "0.5rem" }}
          >
            {data.read} min read
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
