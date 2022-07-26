import { useFavoriteCitiesFetch } from "../hooks/useFavoriteCitiesFetch";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const CityWeatherCard = ({ id, localizedName, degrees, weatherStatus }) => {
  const [isLiked, setIsLiked] = useState(false);
  const iconToShow = isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  const {
    favoriteCities,
    setFavoriteCities,
    createCityInFavoritesDB,
    deleteCityFromFavoritsDB,
  } = useFavoriteCitiesFetch();

  const favoritClickHandler = (e) => {
    if (isLiked) {
      setIsLiked(false);
      const newReducedArray = favoriteCities;
      const indexOfCity = favoriteCities.indexOf((city) => city.id === id);
      newReducedArray.splice(indexOfCity, 1);
      setFavoriteCities(newReducedArray);
      // delete from DB
      deleteCityFromFavoritsDB(id);
      // fetch favorite cities again
    } else {
      setIsLiked(true);
      const isAllreadyInArray = favoriteCities?.some((e) => e.id === id);
      if (!isAllreadyInArray) {
        const newFavoritesArray = [
          ...favoriteCities,
          { id, localizedName, degrees, weatherStatus },
        ];
        setFavoriteCities(newFavoritesArray);
        const city = { id, localizedName, degrees, weatherStatus };
        createCityInFavoritesDB({
          city,
        });
      }
    }
    // here we need to send request to add to db to favorite_cities table
    // then we need to fetch
  };
  useEffect(() => {
    const isInFavorites = favoriteCities.some(
      (favoriteCity) => favoriteCity.id === id
    );
    setIsLiked(isInFavorites);
  }, [favoriteCities, id]);
  return (
    <Card sx={{ maxWidth: 400 }} className="city-card">
      <Grid container xs={12} spacing={2} className="card-content">
        <Grid xs={6} className="left-grid">
          <h3>{localizedName}</h3>
          <h3>
            {degrees} {weatherStatus}
          </h3>
        </Grid>
        <Grid xs={6} className="right-grid">
          <Button onClick={favoritClickHandler}>{iconToShow}</Button>
          <Button onClick={favoritClickHandler} size="small">Add to favorite</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CityWeatherCard;
