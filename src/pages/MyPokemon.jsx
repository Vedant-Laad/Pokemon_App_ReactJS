import React from "react";
import { useDataContext } from "../App";
import ListCard from "../component/card/ListCard";

function MyPokemon() {
  const { myPokemon, updateMyPokemon } = useDataContext();

  return (
    <div className="max-w-screen-xl max-h-screen flex flex-wrap item-start justify-between mx-auto p-4 overflow-auto">
      {myPokemon.length > 0 ? (
        myPokemon.map((item) => (
          <ListCard
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            updateMyPokemon={updateMyPokemon}
            type="mypokemon" // ✅ Identifies it as My Pokemon
          />
        ))
      ) : (
        <p className="text-center w-full text-gray-500">No Pokémon caught yet.</p>
      )}
    </div>
  );
}

export default MyPokemon;
