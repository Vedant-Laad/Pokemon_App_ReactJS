import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import MyPokemon from "./pages/MyPokemon";
import About from "./pages/About";
import Favourite from "./pages/Favourite";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

const DataContext = createContext(null);

const App = () => {
  // My Pokemon state
  const [myPokemon, setMyPokemon] = useState(
    localStorage.getItem("mypokemon") ? JSON.parse(localStorage.getItem("mypokemon")) : []
  );

  const isMyPokemon = (name) => {
    return myPokemon.some((item) => item.name === name);
  };

  const updateMyPokemon = (pokemonData, action) => {
    let updatedPokemon;
    if (action === "add") {
      updatedPokemon = [...myPokemon, pokemonData];
    } else {
      updatedPokemon = myPokemon.filter((obj) => obj.name !== pokemonData.name);
    }
    setMyPokemon(updatedPokemon);
    localStorage.setItem("mypokemon", JSON.stringify(updatedPokemon));
  };

  // Favorite Pokemon state
  const [myFavPokemon, setFavPokemon] = useState(
    localStorage.getItem("favpokemon") ? JSON.parse(localStorage.getItem("favpokemon")) : []
  );

  const isFavPokemon = (name) => {
    return myFavPokemon.some((item) => item.name === name);
  };

  const updateFavPokemon = (pokemonData, action) => {
    let updatedFavPokemon;
    if (action === "add") {
      updatedFavPokemon = [...myFavPokemon, pokemonData];
    } else {
      updatedFavPokemon = myFavPokemon.filter((obj) => obj.name !== pokemonData.name);
    }
    setFavPokemon(updatedFavPokemon);
    localStorage.setItem("favpokemon", JSON.stringify(updatedFavPokemon));
  };

  return (
    <DataContext.Provider
      value={{
        isMyPokemon,
        updateMyPokemon,
        myPokemon,
        isFavPokemon, // ✅ Fixed: Added to context
        updateFavPokemon, // ✅ Fixed: Added to context
        myFavPokemon,
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-700 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="mypokemon" element={<MyPokemon />} />
        <Route path="about" element={<About />} />
        <Route path="favourite" element={<Favourite />} />
      </Route>
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CustomRoutes />
  </BrowserRouter>
);
