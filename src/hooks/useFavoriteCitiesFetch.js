import { useState } from "react";
import { getData, onDelete, postBody } from "../api/api.proxy";
import { useEffectOnce } from "use-effect-once";

const endpoint = "favorite_cities";

export const useFavoriteCitiesFetch = () => {
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

  useEffectOnce(() => {
    fetchFavoriteCitiesList();
  });

  const deleteCityFromFavoritsDB = async (id) => {
    try {
      await onDelete(endpoint, { params: { id } });
    } catch (error) {
      console.error(error);
    }
  };

  const createCityInFavoritesDB = async (city) => {
    try {
      await postBody(endpoint, city);
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
    createCityInFavoritesDB,
  };
};
