import logo from '../../assets/images/pokeball.png'
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useDataContext } from '../../App';



const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
    const [selectNav, setSelectNav] = useState();
    const [showNavForMobile, setShowNavForMobile] = useState(false);
    const {
        myPokemon,
        myFavPokemon
    } = useDataContext();
    let location = useLocation();

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        setSelectNav(location.pathname);
    }, [location]);

    return <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pokemon</span>
            </a>

            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked={theme == "dark" ? true : false} onChange={(e) => setTheme(e.target.checked == true ? "dark" : "light")} />
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">Light</span>
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</span>
            </label>

            <button onClick={() => setShowNavForMobile(!showNavForMobile)} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class={`${showNavForMobile ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NavLink to="/"> <a href="#" class={`block py-2 px-3  text-gray-900   rounded-sm md:bg-transparent ${selectNav == "/" ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500" : ""} md:p-0 dark:text-white `} aria-current="page">Home</a></NavLink>

                    </li>
                    <li>
                        {/* <NavLink to="/favourite">
                        <a href="#" class={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${selectNav == "/favourite" ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500" : ""} md:p-0 dark:text-white `} > Favorite </a></NavLink> */}
                        <NavLink to="/favourite"> <a href="#" class={`block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent ${selectNav == "/favourite" ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500" : ""} md:p-0 dark:text-white `}>My Favourite Pokemon {myFavPokemon.length > 0 && (<div class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{myFavPokemon.length}</div>
                        )}</a></NavLink>
                    </li>
                    <li>
                        <NavLink to="/mypokemon"> <a href="#" class={`block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent ${selectNav == "/mypokemon" ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500" : ""} md:p-0 dark:text-white `}>My Pokemon {myPokemon.length > 0 && (<div class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{myPokemon.length}</div>
                        )}</a></NavLink>
                    </li>
                    <li>
                    <NavLink to="/about"><a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;