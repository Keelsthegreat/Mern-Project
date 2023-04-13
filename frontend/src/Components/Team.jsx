import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Team = () => {
  const { id, teamId } = useParams();
  const [team, setTeam] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    axios.get(`/api/trainers/${id}/teams/${teamId}`)
      .then(res => {
        setTeam(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id, teamId]);

  const handleAddPokemon = (e) => {
    e.preventDefault();
    axios.post(`/api/trainers/${id}/teams/${teamId}/pokemon`, { name: pokemonName })
      .then(res => {
        setTeam(res.data);
        setPokemonName('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRemovePokemon = (pokemonId) => {
    axios.delete(`/api/trainers/${id}/teams/${teamId}/pokemon/${pokemonId}`)
      .then(res => {
        setTeam(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{team.name}</h2>
      <ul>
        {team.pokemon.map(pokemon => (
          <li key={pokemon._id}>
            {pokemon.name} <button onClick={() => handleRemovePokemon(pokemon._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddPokemon}>
        <label>
          Pokemon Name:
          <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
        </label>
        <button type="submit">Add Pokemon</button>
      </form>
    </div>
  );
};

export default Team;