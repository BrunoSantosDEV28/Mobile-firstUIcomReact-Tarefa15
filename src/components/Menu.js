import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Menu = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemText primary="Feed" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Amigos" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sugestões" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
