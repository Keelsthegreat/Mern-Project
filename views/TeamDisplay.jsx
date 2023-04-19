const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class TeamDisplay extends React.Component {
  // ...

  render() {
    let { teams } = this.props;

    console.log("TeamDisplay Data:", teams);

    return (
      <DefaultLayout>
        <div className="superDiv">

        <div className="teams-container">
          <h1>Teams</h1>
          <ul className="teams-list">
            {teams.map((team) => (
              <li key={team._id} className="team-card">
                <div className="team-card-info">
                  <h2>{team.name}</h2>
                  <img src={team.image} height={"auto"} width={"200px"} />
                  <p>{team.description}</p>
                  <ul className="trainers-list">
                    {team.trainers.map((trainer) => (
                      <li key={trainer._id} className="trainer-card">
                        <img src={trainer.image} alt={trainer.name} />
                        <p>
                          {trainer.name} - {trainer.age} - {trainer.hometown}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="team-card-actions">
                  <form action={`/teams/${team._id}?_method=DELETE`} method="POST">
                    <button>Delete</button>
                  </form>
                  <form action={`/teams/${team._id}/edit`} method="GET">
                    <button>Edit</button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
          <a  className="btn" href="/teams/new">Create a Team</a>
        </div>
            </div>
      </DefaultLayout>
    );
  }
}

module.exports = TeamDisplay;
