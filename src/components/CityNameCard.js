import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const CityNameCard = ({ cityKey, name, fetchCityWeatherInfo }) => {
  function onClickHandller(e) {
    fetchCityWeatherInfo(e.target.id, e.target.innerText);
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
