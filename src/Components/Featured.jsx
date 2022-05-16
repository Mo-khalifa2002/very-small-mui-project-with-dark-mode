import { Card, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#222",
    maxWidth: "90%",
    margin: "3rem auto",
    color: "white",
    padding: "2rem",
    borderRadius: "2rem",
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

function Featured(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#77ff2e",
      },
    },
  });

  const classes = useStyles(props);
  return (
    <ThemeProvider>
      <div>
        <Card raised className={classes.root}>
          <Typography varian="h5" component="div" gutterBottom>
            Featured posts
          </Typography>
          <Typography
            varian="body1"
            component="p"
            gutterBottom
            sx={{ margin: "1rem auto" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            deleniti maxime nihil mollitia, aut rem at voluptas ex temporibus
            omnis!
          </Typography>
          <Button variant="contained" color="primary">
            Click here
          </Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default Featured;
