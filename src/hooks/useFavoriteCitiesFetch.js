import { useState } from "react";
import { getData, onDelete, postBody } from "../api/api.proxy";
const endpoint = "favorite_cities";

export const useFavoriteCitiesFetch = (props) => {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [isFavorieCitiesLoading, setIsLoading] = useState(false);

  const fetchFavoriteCitiesList = async () => {
    try {
      setIsLoading(true);
      const response = await getData(endpoint);
      setFavoriteCities(response || []);
      setIsLoading(false);
    } catch (error) {
      console.error("fetching cities fro server", error);
      return [];
    }
  };
  const deleteCityFromFavoritsDB = async (id) => {
    try {
      const response = await onDelete(endpoint, { params: { id } });
      console.log({ response });
    } catch (error) {
      console.error(error);
    }
  };

  const createCityInFavoritesDB = async (city) => {
    try {
      const response = await postBody(endpoint, city);
      console.log({ response });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    favoriteCities,
    isFavorieCitiesLoading,
    setFavoriteCities,
    fetchFavoriteCitiesList,
    deleteCityFromFavoritsDB,
    createCityInFavoritesDB
  };
};
