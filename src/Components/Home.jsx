import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Post from "./Post";
import Sidebar from "./Sidebar";
import Featured from "./Featured";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "gray",
    maxWidth: "90%",
    margin: "1rem auto",
  },
  rootsm: {
    // backgroundColor: "gray",
    maxWidth: "90%",
    margin: "3rem auto",
  },
  main: {
    // backgroundColor: "lightblue",
    padding: "1rem",
  },
  sidebar: {
    padding: "1rem",
    // backgroundColor: "yellow",
  },
});

function Home(props) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles(props);
  return (
    <div>
      <Featured />
      <Grid
        container
        spacing={2}
        direction={matches ? "column" : "row"}
        justifyContent="space-between"
        className={matches ? classes.rootsm : classes.root}
      >
        <Grid columnSpacing={2} container item md={7} className={classes.main}>
          <Grid item md={6} gutterBottom>
            <Post />
          </Grid>
          <Grid item md={6} gutterBottom>
            <Post />
          </Grid>
          <Grid item md={6} gutterBottom>
            <Post />
          </Grid>
          <Grid item md={6} gutterBottom>
            <Post />
          </Grid>
        </Grid>
        <Grid gutterBottom item md={4} className={classes.sidebar}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
