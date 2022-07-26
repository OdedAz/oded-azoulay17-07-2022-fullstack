import CityWeatherCard from "./CityWeatherCard";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function CitiesWeatherCardsList({ citiesWeatherInfo }) {
  if (!citiesWeatherInfo?.id) {
    return (
      <div className="cities-cards-list-wrapper">
        <Box sx={{ width: "100%", height: "60%" }}></Box>
      </div>
    );
  }
  return (
    <div className="cities-cards-list-wrapper">
      <Box sx={{ width: "100%", height: "60%" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <CityWeatherCard {...citiesWeatherInfo} />
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
}
