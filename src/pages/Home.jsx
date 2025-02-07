import Card from "../component/card/Card";

const data = [
    {
        name: "Pikachu",
        imagePath: require("../assets/images/pikachu.png"),
    },
    {
        "name": "Bulbasaur",
        imagePath: require("../assets/images/bulbasaur.png"),
    },
    {
        "name": "Ivysaur",
        imagePath: require("../assets/images/ivysaur.png"),
    },
    {
        "name": "Venusaur",
        imagePath: require("../assets/images/venusaur.png"),
    },
    {
        "name": "Charmander",
        imagePath: require("../assets/images/charmander.png"),
    },
    {
        "name": "Charmeleon",
        imagePath: require("../assets/images/charmeleon.png"),
    },
    {
        "name": "Charizard",
        imagePath: require("../assets/images/charizard.png"),
    },
    {
        "name": "Squirtle",
        imagePath: require("../assets/images/squirtle.png"),
    },
    {
        "name": "Wartortle",
        imagePath: require("../assets/images/wartortle.png"),
    },
    {
        "name": "Blastoise",
        imagePath: require("../assets/images/blastoise.png"),
    }
]
const Home = () => {

    return <div className="max-w-screen-xl max-h-screen flex flex-wrap item-start justify-between mx-auto p-4 overflow-auto">
        {
            data.map(item => {
                return <Card name={item.name} imagePath={item.imagePath} />
            })
        }

    </div> 
}

export default Home;