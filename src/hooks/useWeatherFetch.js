import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

export const useWeatherFetch = (cityKey) => {
  const [citiesWeatherInfo, setCitiesWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchCityWeatherInfo = async (cityKey) => {
    if (cityKey)
      try {
        setIsLoading(true);
        // const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`);
        const response = [
          {
            id: 1234,
            Key: "215854",
            LocalizedName: "Tel Aviv",
            weather_status: "Sunny",
            degrees: 29,
          },
        ];
        setCitiesWeatherInfo(response || []);
        setIsLoading(false);
      } catch (error) {
        console.error("fetching cities fro server", error);
        return [];
      }
  };

  // useEffect(() => {
  //   const { cityWeatherInfo } = fetchCityWeatherInfo(cityKey);
  //   console.log({ cityWeatherInfo });
  // }, [cityKey, fetchCityWeatherInfo]);

  return { citiesWeatherInfo, isLoading , fetchCityWeatherInfo};
};
