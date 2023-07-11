import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function NavBar() {
  const Links = [`Skills`, `Uses`];

  return (
    <List display='flex'>
      {Links.map((link) => (
        <ListItem key={link}>{link}</ListItem>
      ))}
    </List>
  );
}

export default NavBar;
