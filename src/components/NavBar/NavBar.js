import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, IconButton, Stack, Typography } from "@mui/material";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

export const NavBar = () => {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate(e?.currentTarget?.pathname);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>{/* here we will have a logo */}</IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Realcomerce
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="/" onClick={handleClick}>
            Home
          </Button>
          <Button color="inherit" href="/favorite-cities" onClick={handleClick}>
            Favorites
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
