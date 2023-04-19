const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

function Pokedex(props) {
  const { pokemonList, pokemonData } = props;
  return (
    <DefaultLayout className = "pokedexbody">
      <div className="pokedex">
        <h1 className="pokedex-title">Kanto Pokedex</h1>
        <ul className="pkmn-grid">
          {pokemonList.map((pokemon, index) => (
            <li key={pokemon.name} className="pkmn-card">
              <img
                src={pokemonData[index].sprites.front_default}
                alt={pokemon.name}
              />
              <h2>{pokemon.name}</h2>
              <div>
                Type:{" "}
                {pokemonData[index].types.map((type) => (
                  <span key={type.type.name} className="type">
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="height">
                Height: {pokemonData[index].height / 10} m
              </div>
              <div className="weight">
                Weight: {pokemonData[index].weight / 10} kg
              </div>
            </li>
          ))}
        </ul>
      </div>
   
    </DefaultLayout>
  );
}

module.exports = Pokedex;

