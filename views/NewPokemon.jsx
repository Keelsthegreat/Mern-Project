const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class NewPokemon extends React.Component {
  render() {
    let { pokemon } = this.props;
    


    return (
        <DefaultLayout>

      <div>
        <div className='editTrainerDis'>
      <h1>Create Pokemon</h1>
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
          <label htmlFor="level">Level:</label>
          <input type="number" id="level" name="level" />
        </div>
        <div>
          <label htmlFor="types">Type:</label>
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
