import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

const FriendSuggestion = ({ suggestions }) => {
  return (
    <List>
      {suggestions.map((suggestion, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar alt={suggestion.name} src={suggestion.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={suggestion.name}
            secondary={`Amigo em comum: ${suggestion.commonFriend}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default FriendSuggestion;
