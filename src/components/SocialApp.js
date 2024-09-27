import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Feed from "../components/Feed";
import FriendList from "../components/FriendList";
import FriendSuggestion from "../components/FriendSuggestion";
import { Box, Container, Grid } from "@mui/material";

const SocialApp = ({ posts, friends, suggestions }) => {
  return (
    <Container>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Menu />
          <FriendList friends={friends} />
          <FriendSuggestion suggestions={suggestions} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Feed posts={posts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SocialApp;
