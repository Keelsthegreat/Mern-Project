const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class NewPokemon extends React.Component {
  render() {
    let { pokemon } = this.props;
    


    return (
        <DefaultLayout>

      <div>
        <div>
      <h1>Create a new Pokemon</h1>
      <form action="/pokemoncreate" method="POST" >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input type="text" id="weight" name="weight" />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input type="text" id="height" name="height" />
        </div>
        <div>
          <label htmlFor="types">Types:</label>
          <input type="text" id="types" name="types" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
      </div>
        </DefaultLayout>
    );
  }
}

module.exports = NewPokemon;
