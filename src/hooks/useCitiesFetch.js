import { useState } from "react";
import axios from "axios";
import {getData} from "../api/api.proxy";
const endpoint = 'auto_complete';

export const useCitiesFetch = () => {
  // console.log("useCitiesFetch activated")
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCitiesList = async (textToSearch) => {
      try {
          setIsLoading(true);
          const response = await getData(endpoint, {textToSearch: textToSearch});
          setCities(response?.data || [])
      } catch (error) {
          console.error("fetching cities fro server", error);
          return [];
      }
  };

  return { cities, isLoading , fetchCitiesList};
};
