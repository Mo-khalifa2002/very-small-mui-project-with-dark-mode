import {
  Card,
  CardContent,
  Typography,
  MenuList,
  MenuItem,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  mbottom: {
    marginBottom: "1rem",
  },
});

function Sidebar(props) {
  const classes = useStyles(props);
  return (
    <div>
      <Card raised gutterBottom className={classes.mbottom}>
        <CardContent>
          <Typography variant="h5" component="div">
            the sidebar
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            repudiandae ut ab dolore voluptas earum quas vitae? Rerum, nisi ad.
          </Typography>
        </CardContent>
      </Card>
      <Card raised>
        <Typography variant="h6" component="div">
          Sidebar list
        </Typography>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Card>
    </div>
  );
}

export default Sidebar;
