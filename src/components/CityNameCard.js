import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const CityNameCard = ({ cityKey, name, fetchCityWeatherInfo }) => {
  function onClickHandler(e) {
    fetchCityWeatherInfo(e.target.id, e.target.innerText);
  }
  return (
    <ListItem disablePadding key={cityKey}>
      <ListItemButton onClick={onClickHandler} id={cityKey} variant="text">
        {name}
      </ListItemButton>
    </ListItem>
  );
};

export default CityNameCard;
