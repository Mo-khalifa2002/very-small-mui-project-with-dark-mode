import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function Post() {
  const [posts, setPosts] = useState([]);
  const fetchdata = async () => {
    const response = await fetch();
    // "https://jsonplaceholder.typicode.com/posts/?_page={page}"
    const posts = await response.json();
  };
  useEffect(() => {
    fetchdata();
    setPosts(posts);
  }, []);

  return (
    <div>
      <Card>
        <CardMedia
          raised
          title="tree"
          image="https://via.placeholder.com/200x100"
          component="img"
        />
        <CardContent>
          <CardMedia>
            <Typography variant="h6" component="div">
              the card header here
            </Typography>
            <Typography variant="body1" component="div">
              the card header here Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Rerum sint qui deleniti placeat repellendus
              delectus neque mollitia sapiente? Nam, consequuntur?
            </Typography>
          </CardMedia>
          <CardActions>
            <Button variant="contained" color="primary" fullWidth>
              click
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default Post;
