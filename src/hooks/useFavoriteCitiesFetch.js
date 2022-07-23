
import { useState, useEffect } from "react";
import axios from "axios";
import { useUpdateEffect } from "ahooks";
import { useCallback } from "react";

export const useFavoriteCitiesFetch = (props) => {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [page, setPage] = useState(0);
  // const increasePage = () => {
  //  setPage((prev) => prev + 1);
  // }
  // const fetchCities = useCallback(async () => {
  //   setIsLoading(true);
  //   const response = await axios.get(
  //     `http://localhost:3000/auto_complete`,
  //     { params:  props.textToSearch }
  //   );
  //   if (response && response.data && response.data.results) {
  //       setCities((prevUsers) => prevUsers.concat(response.data.results));
  //   } else {
  //     // handle error situation
  //   }
  // });

  // useEffect(() => {
  //     fetchCities();
  // }, [fetchCities]);

  // useUpdateEffect(() => {
  //   setIsLoading(false);
  // }, [cities]);

  // return { cities, isLoading, fetchCities, increasePage };
  return "useFavoriteCitiesFetch test"
};