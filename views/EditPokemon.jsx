const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

function EditPokemon(props) {
  const { pokemon} = props;

  return (
    <DefaultLayout>

    <div>

      <h1>Edit Pokemon</h1>
      <form action={`/pokemoncreate/${pokemon._id}/edit?_method=PUT`} method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={pokemon.name}/>
        </div>
        <label htmlFor = "image">:</label>
        <input type="text" id="image" name="image" defaultValue={pokemon.image} />
        <div>
        <div>
            <label htmlFor = "description">Description:</label>
            <input type = "text" id = "description" name = "description" defaultValue = {pokemon.description}/>
        </div>
          <label htmlFor="weight">Weight:</label>
          <input type="number" id="weight" name="weight" defaultValue={pokemon.level} />
        </div>
        <div>
          <label htmlFor = "height">Height:</label>
          <input type = "text" id = "height" name = "height" defaultValue={pokemon.height}/>

        </div>
        <div>
          <label htmlFor = "types">Types:</label>
          <input type = "text" id = "types" name = "types" defaultValue={pokemon.types}/>
        </div>
        <button type="submit">Save</button>
      </form>
   
    </div>
    </DefaultLayout>
  );
}

module.exports = EditPokemon;