import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
  Chip,
  Divider,
} from "@mui/material";
import { ThumbUp, Share } from "@mui/icons-material";

const Post = ({ post }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={post.author.name} src={post.author.avatar} />
          <div style={{ marginLeft: "10px" }}>
            <Typography variant="body1">{post.author.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {new Date(post.date).toLocaleDateString()}
            </Typography>
          </div>
        </div>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.text}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div>
            <IconButton>
              <ThumbUp />
            </IconButton>
            <Typography variant="body2">{post.likes} curtidas</Typography>
          </div>
          <div>
            <IconButton>
              <Share />
            </IconButton>
            <Typography variant="body2">
              {post.shares} compartilhamentos
            </Typography>
          </div>
        </div>
        <Divider style={{ margin: "10px 0" }} />
        {post.comments.map((comment, index) => (
          <div key={index}>
            <Chip label={comment.author} variant="outlined" />
            <Typography variant="body2">{comment.text}</Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Post;
