import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite-cities" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
