import { useState } from "react";
import {getData} from "../api/api.proxy";
const endpoint = 'auto_complete';

export const useCitiesFetch = () => {
  const [cities, setCities] = useState([]);
  const [isCitiesLoading, setIsLoading] = useState(false);

  const fetchCitiesList = async (textToSearch) => {
      try {
          setIsLoading(true);
          const response = await getData(endpoint, {textToSearch: textToSearch});
          setCities(response|| [])
          setIsLoading(false);
      } catch (error) {
          console.error("fetching cities fro server", error);
          return [];
      }
  };

  return { cities, isCitiesLoading , fetchCitiesList};
};
