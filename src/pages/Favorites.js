import React, { useEffect } from "react";
import { useFavoriteCitiesFetch } from "../hooks/useFavoriteCitiesFetch";
// import CityCard from "../components/CityCard";
import CitiesWeatherCardsList from "../components/CitiesWeatherCardsList";
import ResultSearchCitiesList from "../components/CitiesNamesList";
import Grid from "@mui/material/Grid";

const Favorites = () => {
  const { favoriteCities } = useFavoriteCitiesFetch();
  useEffect(()=>{

  },[favoriteCities])
  console.log({ favoriteCities });
  return (
    <div>
      <h1>Favorites</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitiesWeatherCardsList />
        </Grid>
        <Grid item xs={4}>
          <ResultSearchCitiesList citiesNamesList={favoriteCities} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Favorites;
