import { useFavoriteCitiesFetch } from "../hooks/useFavoriteCitiesFetch";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Grid } from "@mui/material";

const CityWeatherCard = ({ id, localizedName, degrees, weatherStatus }) => {
  const [isLiked, setIsLiked] = useState(false);
  const iconToShow = isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  const { favoriteCities, setFavoriteCities, createCityInFavoritesDB } =
    useFavoriteCitiesFetch();
  const favoritClickHandler = (e) => {
    if (isLiked) {
      setIsLiked(false);
      const newReducedArray = favoriteCities;
      const indexOfCity = favoriteCities.indexOf((city) => city.id === id);
      newReducedArray.splice(indexOfCity, 1);
      setFavoriteCities(newReducedArray);
      console.log("here: ", favoriteCities);
      // delete from DB
      // deleteCityFromFavoritsDB(cityWeatherInfo.id)
      // fetch favorite cities again
    } else {
      setIsLiked(true);
      const isAllreadyInArray = favoriteCities?.some((e) => e.id === id);
      if (!isAllreadyInArray) {
        const newFavoritesArray = [
          ...favoriteCities,
          { id, localizedName, degrees, weatherStatus },
        ];
        createCityInFavoritesDB({
          city: { id, localizedName, degrees, weatherStatus },
        });
        console.log({ newFavoritesArray });
      }
    }
    // here we need to send request to add to db to favorite_cities table
    // then we need to fetch
  };

  return (
    <Card sx={{ maxWidth: 400 }} className="city-card">
      {/* <CardHeader title={cityWeatherInfo.LocalizedName}></CardHeader> */}
      {/* <CardContent className="card-content"> */}
      <Grid container xs={12} spacing={2} className="card-content">
        <Grid xs={6} className="left-grid">
          <h3>{localizedName}</h3>
          <h3>
            {degrees} {weatherStatus}
          </h3>
        </Grid>
        <Grid xs={6} className="right-grid">
          <Button onClick={favoritClickHandler}>{iconToShow}</Button>
          <Button size="small">Add to favorite</Button>
        </Grid>
      </Grid>

      {/* </CardContent> */}
    </Card>
  );
};

export default CityWeatherCard;
