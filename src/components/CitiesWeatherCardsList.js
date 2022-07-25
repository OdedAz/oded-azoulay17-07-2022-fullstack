import CityWeatherCard from "./CityWeatherCard";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function CitiesWeatherCardsList({ citiesWeatherInfo }) {

  if (!citiesWeatherInfo?.length) {
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
            {citiesWeatherInfo?.map((cityWeatherInfo) => {
              console.log({cityWeatherInfo})
              return (
                <ListItem disablePadding key={cityWeatherInfo.cityKey}>
                  <CityWeatherCard cityWeatherInfo={cityWeatherInfo}/>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    </div>
  );
}
