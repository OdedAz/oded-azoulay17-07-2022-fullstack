import React from "react";
import { useCitiesFetch } from "../hooks/useCitiesFetch";
import { useWeatherFetch } from "../hooks/useWeatherFetch";
import CitiesWeatherCardsList from "../components/CitiesWeatherCardsList";
import CitiesNamesList from "../components/CitiesNamesList";
import SearchField from "../components/SearchField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Home = () => {
  const { cities, isCitiesLoading, fetchCitiesList } = useCitiesFetch();
  const { citiesWeatherInfo, isCitiesWeatherLoading, fetchCityWeatherInfo } =
    useWeatherFetch();

  return (
    <div>
      <Box>
        <SearchField fetchCitiesList={fetchCitiesList} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CitiesWeatherCardsList citiesWeatherInfo={citiesWeatherInfo} />
            {isCitiesWeatherLoading ? <div>Loading...</div> : ""}
          </Grid>
          <Grid item xs={4}>
            <CitiesNamesList
              citiesNamesList={cities}
              fetchCitiesList={fetchCitiesList}
              fetchCityWeatherInfo={fetchCityWeatherInfo}
            />
            {isCitiesLoading ? <div>Loading...</div> : ""}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
