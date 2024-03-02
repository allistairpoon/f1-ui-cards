import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Virtual from "./media-preview.jpg";
import Strategy from "./media-preview-2.jpg";
import Telemetry from "./media-preview-3.jpg";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "0 200px"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={8}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card title="Oracle Virtual Lap In Monza" topic="Virtual Lap" image={Virtual} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card title="Oracle Strategy Guide" topic="Oracle Strategy Guide" image={Strategy}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card title="Oracle Cloud Telemetry Data"topic="Data" image={Telemetry}/>
      </Grid>
    </Grid>
  );
};

export default App;
