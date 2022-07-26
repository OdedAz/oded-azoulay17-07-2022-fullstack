import React from "react";
import { useFavoriteCitiesFetch } from "../hooks/useFavoriteCitiesFetch";
import { useWeatherFetch } from "../hooks/useWeatherFetch";
import CitiesWeatherCardsList from "../components/CitiesWeatherCardsList";
import ResultSearchCitiesList from "../components/CitiesNamesList";
import Grid from "@mui/material/Grid";

const Favorites = () => {
  const { favoriteCities, fetchFavoriteCitiesList } = useFavoriteCitiesFetch();
  const { citiesWeatherInfo, isCitiesWeatherLoading, fetchCityWeatherInfo } =
    useWeatherFetch();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitiesWeatherCardsList citiesWeatherInfo={citiesWeatherInfo} />
          {isCitiesWeatherLoading ? <div>Loading...</div> : ""}
        </Grid>
        <Grid item xs={4}>
          <ResultSearchCitiesList
            citiesNamesList={favoriteCities}
            fetchCityWeatherInfo={fetchCityWeatherInfo}
            fetchCitiesList={fetchFavoriteCitiesList}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Favorites;
