const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class TeamDisplay extends React.Component {
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
    let { teams } = this.props;
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
    console.log("TeamDisplay Data:", teams);

    return (
      <div>
        <DefaultLayout />
        <h1>Teams</h1>
        <ul>
          {teams.map((team) => (
            <li key={team._id}>
              <div>
                <h2>{team.name}</h2>
                <img src={team.image} height={"auto"} width={"200px"} />
                <p>{team.description}</p>
                {/* <p>{team[trainers]}</p> */}
                <ul>
                  {team.trainers.map((trainer) => (
                    <li key={trainer._id}>
                      <img src={trainer.image} alt={trainer.name} />
                      <p>
                        {trainer.name} - {trainer.age} - {trainer.hometown}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <form action={`/teams/${team._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
              </form>
              {/* <form action = {`/teams/${team._id}/edit?_method=PUT`} method = "POST">
                <button>Edit</button>
              </form> */}
            </li>
          ))}
        </ul>
        <a href="/teams/new">Create a Team</a>
      </div>
    );
  }
}

module.exports = TeamDisplay;
