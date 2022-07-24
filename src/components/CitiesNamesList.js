import React from "react";
import CityNameCard from "./CityNameCard";
// import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";

export default function CitiesNamesList({
  citiesNamesList,
  setCity,
  fetchCitiesList,
  fetchCityWeatherInfo
}) {
  return (
    <div className="results-cards-list-wrapper">
      <Box sx={{ width: "100%" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {citiesNamesList?.map((city) => {
              return (
                <CityNameCard
                  key={city.key}
                  cityKey={city.key}
                  name={city.name}
                  setCity={setCity}
                  fetchCitiesList={fetchCitiesList}
                  fetchCityWeatherInfo={fetchCityWeatherInfo}
                />
              );
            })}
          </List>
          {/* {needToRender ? <div>Loading...</div> : ""} */}
        </nav>
      </Box>
    </div>
  );
}
