import CityWeatherCard from "./CityWeatherCard";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { useWeatherFetch } from "../hooks/useWeatherFetch";

// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";

export default function CitiesWeatherCardsList() {
  const { cityWeatherInfo, isLoading } = useWeatherFetch()
  return (
    <div className="cities-cards-list-wrapper">
      <Box sx={{ width: "100%" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem> */}
            <ListItem disablePadding>
              <CityWeatherCard />
            </ListItem>
            <ListItem disablePadding>
              <CityWeatherCard />
            </ListItem>
            <ListItem disablePadding>
              <CityWeatherCard />
            </ListItem>
            <ListItem disablePadding>
              <CityWeatherCard />
            </ListItem>
          </List>
        </nav>
        {/* <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav> */}
      </Box>
    </div>
  );
}
