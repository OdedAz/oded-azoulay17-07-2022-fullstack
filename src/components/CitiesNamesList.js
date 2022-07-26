import React from "react";
import CityNameCard from "./CityNameCard";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

export default function CitiesNamesList({
  citiesNamesList,
  setCity,
  fetchCitiesList,
  fetchCityWeatherInfo,
}) {
  return (
    <div className="results-cards-list-wrapper">
      <Box sx={{ width: "100%" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {citiesNamesList?.map((city) => {
              const key = city.key || city.id;
              const name = city.name || city.localized_name;
              return (
                <CityNameCard
                  key={key}
                  cityKey={key}
                  name={name}
                  setCity={setCity}
                  fetchCitiesList={fetchCitiesList}
                  fetchCityWeatherInfo={fetchCityWeatherInfo}
                />
              );
            })}
          </List>
        </nav>
      </Box>
    </div>
  );
}
