import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const CityNameCard = ({ cityKey, name }) => {
    console.log(cityKey)
  function onClickHandller() {}
  return (
    <ListItem disablePadding key={cityKey}>
      <ListItemButton
        onClick={onClickHandller()}
        id={cityKey}
        variant="text"
      >
        {name}
      </ListItemButton>
    </ListItem>
  );
};

export default CityNameCard;
