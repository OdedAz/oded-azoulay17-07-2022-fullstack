import React, { useState } from "react";
import { useCitiesFetch } from "../hooks/useCitiesFetch";
// import CityCard from "../components/CityCard";
import CitiesWeatherCardsList from "../components/CitiesWeatherCardsList";
import CitiesNamesList from "../components/CitiesNamesList";
import SearchField from "../components/SearchField";
import Grid from "@mui/material/Grid";

const Home = () => {

  // const { favorieCities, isLoading, increasePage } = useFavoriteCitiesFetch();
  const { cities, isLoading, fetchCitiesList } = useCitiesFetch();

  return (
    <div>
      <SearchField
        fetchCitiesList={fetchCitiesList}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitiesWeatherCardsList />
        </Grid>
        <Grid item xs={4}>
          <CitiesNamesList citiesNamesList={cities} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
