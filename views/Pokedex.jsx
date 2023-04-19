const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");


function Pokedex(props) {
  const { pokemonList, pokemonData } = props;
  return (
      <DefaultLayout>

    <div>
    
      {/* <head>
  <link rel="stylesheet" href="css/styles.css"/>
</head> */}
      <h1>Pokemon List</h1>
        <ul className='pkmn-grid'>
        {pokemonList.map((pokemon, index) => (
          <li key={pokemon.name}>
            <img
              src={pokemonData[index].sprites.front_default}
              alt={pokemon.name}
              />
            <h1>{pokemon.name}</h1>
            <div>
              Type:{" "}
              {pokemonData[index].types
                .map((type) => type.type.name)
                .join(", ")}
            </div>
            <div>Height: {pokemonData[index].height / 10} m</div>
            <div>Weight: {pokemonData[index].weight / 10} kg</div>
          </li>
        ))}
      </ul>
       
    </div>
        </DefaultLayout>
  );
}

module.exports = Pokedex;
