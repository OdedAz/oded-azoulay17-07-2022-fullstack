import { useState } from "react";
import {getData} from "../api/api.proxy";
const endpoint = 'current_weather';

export const useWeatherFetch = (cityKey) => {
  const [citiesWeatherInfo, setCitiesWeatherInfo] = useState({});
  const [isCitiesWeatherLoading, setIsCitiesWeatherLoading] = useState(false);
  const fetchCityWeatherInfo = async (cityKey,cityName) => {
    if (cityKey)
      try {
        setIsCitiesWeatherLoading(true);
        const response = await getData(endpoint,{cityKey});
        response.localizedName = cityName;
        console.log({response})
        // const response = [
        //   {
        //     id: 1234,
        //     Key: "215854",
        //     LocalizedName: "Tel Aviv",
        //     weather_status: "Sunny",
        //     degrees: 29,
        //   },
        // ];
        setCitiesWeatherInfo(response || []);
        setIsCitiesWeatherLoading(false);
      } catch (error) {
        console.error("fetching cities fro server", error);
        return [];
      }
  };

  return { citiesWeatherInfo, isCitiesWeatherLoading , fetchCityWeatherInfo};
};
