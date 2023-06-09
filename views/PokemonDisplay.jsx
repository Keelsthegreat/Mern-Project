const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class PokemonDisplay extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     trainers: {},
  //     teams: [],
  //   };
  // }
  // componentDidMount() {
  //   this.setState({ trainers: this.props });
  //   this.setState({ teams: getTeams() });
  // }
  // async getTeam() {
  //   return await Team.find();
  // }

  render() {
    let { pokemon } = this.props;
    // let { trainers } = this.props;

    // let { teams } = getTeams();

    // const getTeams = async () => {
    //   return await Team.find();
    // };

    // console.log("Data recieved:", {
    //   state: this.state,
    //   trainers: this.state.trainers,
    //   teams: this.state.teams,
    // });
    console.log("PkmnDisplay Data:", pokemon);

    return (
        <DefaultLayout>

      <div className="pokemonDis">
      <h1>Pokemon</h1>
      <ul className="list">
        {pokemon.map((pkmn) => (
          <li key={pkmn._id} className = "trainer-card">
            

            <h2>{pkmn.name}</h2>
            <img src={pkmn.image} alt={pkmn.name} />
            <p>Level: {pkmn.level}</p>
           <p>Type: {pkmn.types}</p>
            <form action={`/pokemoncreate/${pkmn._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
              </form>
              <form action = {`/pokemoncreate/${pkmn._id}/edit`} method = "GET">
                <button>Edit</button>
              </form>
            
          </li>
        ))}
      </ul>
      <a className="trainer-card" href="/pokemoncreate/new">Create a New Pokemon</a>
    </div>
        </DefaultLayout>
  );
        
}}

  module.exports = PokemonDisplay;
