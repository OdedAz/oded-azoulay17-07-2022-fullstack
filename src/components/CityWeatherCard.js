import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";

const CityWeatherCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const iconToShow = isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  return (
    <Card sx={{ maxWidth: 400 }} className="city-card">
      <CardHeader title="Tel Aviv"></CardHeader>
      <CardContent className="card-content">
        <Button>{iconToShow}</Button>

        <Button size="small">Add to favorite</Button>
      </CardContent>
    </Card>
  );
};

export default CityWeatherCard;
