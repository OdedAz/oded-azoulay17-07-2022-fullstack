import { AppBar, IconButton, Stack, Typography } from "@mui/material";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>{/* here we will have a logo */}</IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Realcomerce
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' href='/'>Home</Button>
          <Button color='inherit' href='/favorite-cities'>Favorites</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
