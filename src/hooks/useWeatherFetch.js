import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

export const useWeatherFetch = (cityKey) => {
  // console.log("useCitiesFetch activated")
  const [cityWeatherInfo, setCityWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchCityWeatherInfo = useCallback(async (cityKey) => {
    if (cityKey) try {
      setIsLoading(true);
      const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`);
      setCityWeatherInfo(response || []);
      setIsLoading(false);
      return;
    } catch (error) {
      console.error("fetching cities fro server", error);
      return [];
    }
  }, []);

  useEffect(() => {
      const { cityWeatherInfo } = fetchCityWeatherInfo(cityKey);
      console.log({ cityWeatherInfo });
  }, [cityKey,fetchCityWeatherInfo]);

  return { cityWeatherInfo, isLoading };
};
