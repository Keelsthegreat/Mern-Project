import React, { useState, useEffect } from "react";
import axios from "axios";

const pdex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      setPokemonList(response.data.results);
    };
    fetchPokemonList();
  }, []);

  const handlePokemonClick = async (pokemon) => {
    const response = await axios.get(pokemon.url);
    setSelectedPokemon(response.data);
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} onClick={() => handlePokemonClick(pokemon)}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
      {selectedPokemon && (
        <div className="pokemon-details">
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
          <p>Type: {selectedPokemon.types[0].type.name}</p>
          <p>Height: {selectedPokemon.height / 10} m</p>
          <p>Weight: {selectedPokemon.weight / 10} kg</p>
          <p>Abilities:</p>
          <ul>
            {selectedPokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
