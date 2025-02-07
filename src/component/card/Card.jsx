import { useState } from "react";
import { useDataContext } from "../../App";

const AddIcon = <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
</svg>;

const AddedIcon = <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
</svg>;

const HeartIcon = ({ isFavorite, onClick }) => (
    <button onClick={onClick} className="ml-2">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24">
            <path d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
    </button>
);

const Card = (props) => {
    const { name, imagePath } = props;

    const { isMyPokemon, updateMyPokemon, isFavPokemon, updateFavPokemon } = useDataContext();
    const isFavorite = isFavPokemon(name);

    return (
        <div className="sm:w-full md:w-56 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-4">
            <a href="#">
                <img className="rounded-t-lg" src={imagePath} alt="" />
            </a>
            <div className="p-5 flex justify-between items-center">
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <HeartIcon isFavorite={isFavorite} onClick={() => updateFavPokemon({ name, imagePath }, isFavorite ? "remove" : "add")} />
            </div>
            <div className="flex justify-center items-center">
                <button onClick={() => updateMyPokemon({ name, imagePath }, isMyPokemon(name) ? "remove" : "add")} 
                    type="button" 
                    className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    {isMyPokemon(name) ? AddedIcon : AddIcon} {isMyPokemon(name) ? "Added" : "Add"} Pokemon
                </button>
            </div>
        </div>
    );
}

export default Card;
