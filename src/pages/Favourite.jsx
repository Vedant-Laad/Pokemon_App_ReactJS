import React from "react";
import { useDataContext } from "../App";
import ListCard from "../component/card/ListCard";

function Favourite() {
  const { myFavPokemon, updateFavPokemon } = useDataContext();

  return (
    <div className="max-w-screen-xl max-h-screen flex flex-wrap item-start justify-between mx-auto p-4 overflow-auto">
      {myFavPokemon.length > 0 ? (
        myFavPokemon.map((item) => (
          <ListCard
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            updateFavPokemon={updateFavPokemon}
            type="favourite" // ✅ Identifies it as Favourite Pokemon
          />
        ))
      ) : (
        <p className="text-center w-full text-gray-500">No favourite Pokémon yet.</p>
      )}
    </div>
  );
}

export default Favourite;
