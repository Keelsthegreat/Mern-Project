const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

function EditPokemon(props) {
  const { pokemon} = props;

  return (
    <DefaultLayout>

    <div className='editTrainerDis'>

      <h1>Edit Pokemon</h1>
      <form action={`/pokemoncreate/${pokemon._id}/edit?_method=PUT`} method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={pokemon.name}/>
        </div>
        <label htmlFor = "image">Images:</label>
        <input type="text" id="image" name="image" defaultValue={pokemon.image} />
        <div>
          <label htmlFor="level">Level:</label>
          <input type="number" id="level" name="level" defaultValue={pokemon.level} />
        </div>
          <div>
          <label htmlFor = "types">Type:</label>
          <input type = "text" id = "types" name = "types" defaultValue={pokemon.types}/>
        </div>
        <button type="submit">Save</button>
      </form>
   
    </div>
    </DefaultLayout>
  );
}

module.exports = EditPokemon;