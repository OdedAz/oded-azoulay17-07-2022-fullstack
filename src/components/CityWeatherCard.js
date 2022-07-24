import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";



const CityWeatherCard = ({ cityWeatherInfo }) => {
  const [isLiked, setIsLiked] = useState(false);
  const iconToShow = isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  return (
    <Card sx={{ maxWidth: 400 }} className="city-card">
      {/* <CardHeader title={cityWeatherInfo.LocalizedName}></CardHeader> */}
      {/* <CardContent className="card-content"> */}
      <Grid container xs={12} spacing={2} className="card-content">
        <Grid xs={6} className="left-grid">
            <h3>{cityWeatherInfo.LocalizedName}</h3>
            <h3>
              {cityWeatherInfo.degrees} {cityWeatherInfo.weather_status}
            </h3>
        </Grid>
        <Grid xs={6} className="right-grid">
            <Button>{iconToShow}</Button>
            <Button size="small">Add to favorite</Button>
        </Grid>
      </Grid>

      {/* </CardContent> */}
    </Card>
  );
};

export default CityWeatherCard;
