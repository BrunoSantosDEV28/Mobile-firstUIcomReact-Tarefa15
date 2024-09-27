import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
