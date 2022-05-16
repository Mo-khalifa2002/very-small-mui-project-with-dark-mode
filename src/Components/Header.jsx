import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Switches from "./Switches";

function Header(props) {
  const { onChange, checked } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Grid
        container
        justify="space-around"
        direction={matches ? "column" : "row"}
      >
        <AppBar position="static" color="primary">
          <Toolbar>
            <Grid container md={6} direction="row" justify="flex-start">
              <Grid item md={3}>
                <IconButton>
                  <AppRegistrationIcon />
                </IconButton>
              </Grid>
              <Grid item md={3}>
                <Typography variant="h6">Mk Blog</Typography>
              </Grid>
            </Grid>
            <Grid item md={6} sx={{ flexGrow: "1" }}>
              <Button variant="text" color="primary" sx={{ color: "yellow" }}>
                About
              </Button>
              <Button variant="text" color="primary" sx={{ color: "yellow" }}>
                Contact us
              </Button>
              <Button variant="text" color="primary" sx={{ color: "yellow" }}>
                Posts
              </Button>
              <Switches checked={checked} onChange={onChange} />
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Header;
