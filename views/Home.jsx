const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

function Home(props) {
  const { pokemonList, pokemonData } = props;
  return (
    <div>
      <DefaultLayout />
      <h1>Pokemon List</h1>
      <ul>
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
  );
}

module.exports = Home;
