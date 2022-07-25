import React from "react";
// import CityCard from "../components/CityCard";
import CitiesWeatherCardsList from "../components/CitiesWeatherCardsList";
import ResultSearchCitiesList from "../components/CitiesNamesList";
import Grid from "@mui/material/Grid";

const Favorites = () => {
  
  return (
    <div>
      <h1>Favorites</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitiesWeatherCardsList />
        </Grid>
        <Grid item xs={4}>
          <ResultSearchCitiesList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Favorites;
