import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const CityNameCard = ({
  cityKey,
  name,
  fetchCityWeatherInfo,
}) => {
  function onClickHandller(e) {
    // here i need to fetch the city data
    // and to use setCity to change the city data.
    fetchCityWeatherInfo(e.target.id);
  }
  return (
    <ListItem disablePadding key={cityKey}>
      <ListItemButton onClick={onClickHandller} id={cityKey} variant="text">
        {name}
      </ListItemButton>
    </ListItem>
  );
};

export default CityNameCard;
