import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Virtual from "./media-preview.jpg";
import Strategy from "./media-preview-2.jpg";
import Telemetry from "./media-preview-3.jpg";
import Typography from "@mui/joy/Typography";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "0 200px",
  },
}));

const gridStyle = {
  alignItems: "flex-end",
  padding: "150px 50px 50px 50px",
  width: "80%",
};

const divStyle = {
  backgroundImage:
    "url('https://s3-alpha-sig.figma.com/img/3252/1a3e/532aeade4d47fa6e4f8b881021474451?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hzdch63DjqK84GHLhA9NdG6Kt85oj5Bmoi9EQS0vk8LbGoZwFK~Hr0-D4Vf--wlw5OV8XGw633ndEeugah8uGpzwZPAe3Csm76tyOMv6-9h6GvkURVeYW0yjq5oNJ21Q7WySbOAeRWbAlrVOtm2MErORnOYlVhNrjYWPhWGtozKguNSlEl-3jA8ZS70clemy0PU8WQWIzxAI22z8BvjtHjmvLDzsVkOz3PoZrsWZ6UgDYHKiDRsND1C5a50sl7Xaok0xw79Rx-3nWDM8A7PJjIaizg45yAckgL1qyuskPCOhnOitromBHtfpow~7uSKLp-C7qcKnIkOpIuHaUSm5UA__') ",
  backgroundSize: "100% 100%",
  height: "880px",
  width: "1440px",
  display: "flex",
};

const App = () => {
  const classes = useStyles();
  return (
    <div style={divStyle}>
      <Typography
        fontSize="40px"
        textColor="#fff"
        textAlign="right"
        sx={{ position: "absolute", left: "2.5rem", top: "2.5rem" }}
      >
        <strong>Oracle In Practice</strong>
      </Typography>
      <Grid
        container
        spacing={8}
        // className={classes.gridContainer}
        justify="center"
        style={gridStyle}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            title="Oracle Virtual Lap In Monza"
            topic="Virtual Lap"
            image={Virtual}
            link="https://www.redbullracing.com/int-en/videos/oracle-virtual-laps-2023-monza"
            read="6"
            icon="play"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            title="Oracle Strategy Guide"
            topic="Oracle Strategy Guide"
            image={Strategy}
            link="https://www.youtube.com/watch?v=PhdAkQbQtao"
            read="4"
            icon="play"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            title="Oracle Cloud Telemetry Data"
            topic="Data"
            image={Telemetry}
            link="https://www.oracle.com/redbullracing/esports-team/"
            read="3"
            icon="pie"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
