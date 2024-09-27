import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar alt={friend.name} src={friend.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={friend.name}
            secondary={`${friend.commonFriends} amigos em comum`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default FriendList;
