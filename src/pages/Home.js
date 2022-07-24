import React, { useState } from "react";
import { useCitiesFetch } from "../hooks/useCitiesFetch";
import { useWeatherFetch } from "../hooks/useWeatherFetch";
// import CityCard from "../components/CityCard";
import CitiesWeatherCardsList from "../components/CitiesWeatherCardsList";
import CitiesNamesList from "../components/CitiesNamesList";
import SearchField from "../components/SearchField";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [cityKey, setCityKey] = useState(null);
  const [cityWeatherInformation, setCityWeatherInformation] = useState({});

  // const { favorieCities, isLoading, increasePage } = useFavoriteCitiesFetch();
  const { cities, isLoading, fetchCitiesList } = useCitiesFetch();
  const { citiesWeatherInfo, fetchCityWeatherInfo } = useWeatherFetch();
  console.log(citiesWeatherInfo);
  return (
    <div>
      <SearchField fetchCitiesList={fetchCitiesList} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitiesWeatherCardsList citiesWeatherInfo={citiesWeatherInfo}/>
        </Grid>
        <Grid item xs={4}>
          <CitiesNamesList
            citiesNamesList={cities}
            fetchCitiesList={fetchCitiesList}
            fetchCityWeatherInfo={fetchCityWeatherInfo}
            setCityKey={setCityKey}
            setCityWeatherInformation={setCityWeatherInformation}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
