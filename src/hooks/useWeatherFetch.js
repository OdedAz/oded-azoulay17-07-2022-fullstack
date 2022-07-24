import { useState } from "react";

export const useWeatherFetch = (cityKey) => {
  const [citiesWeatherInfo, setCitiesWeatherInfo] = useState({});
  const [isCitiesWeatherLoading, setIsCitiesWeatherLoading] = useState(false);
  const fetchCityWeatherInfo = async (cityKey) => {
    if (cityKey)
      try {
        setIsCitiesWeatherLoading(true);
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
        setIsCitiesWeatherLoading(false);
        console.log()
      } catch (error) {
        console.error("fetching cities fro server", error);
        return [];
      }
  };

  return { citiesWeatherInfo, isCitiesWeatherLoading , fetchCityWeatherInfo};
};
