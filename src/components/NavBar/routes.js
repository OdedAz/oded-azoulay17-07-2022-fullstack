import { Home, Favorites } from "pages";

export const routes = [
  { path: "/", name: "Home", component: Home, exact: true },
  { path: "/favorite-cities", name: "Favorites", component: Favorites },
];