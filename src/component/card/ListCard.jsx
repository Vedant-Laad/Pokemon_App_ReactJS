import React from "react";

const ListCard = (props) => {
  const { imagePath, name, updateMyPokemon, updateFavPokemon, type } = props;

  // Determine the correct function to call for removal
  const handleRemove = () => {
    if (type === "mypokemon") {
      updateMyPokemon({ name }, "remove");
    } else if (type === "favourite") {
      updateFavPokemon({ name }, "remove");
    }
  };

  return (
    <div className="w-full flex items-center justify-between bg-white border h-28 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mr-4 md:mr-0 mb-4">
      <a href="#">
        <img className="rounded-t-lg" style={{ height: "5rem" }} src={imagePath} alt={name} />
      </a>
      <div className="flex justify-center items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
      </div>
      <div>
        <button onClick={handleRemove}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="dark:text-white mr-4" viewBox="0 0 30 30" fill="currentColor">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ListCard;
