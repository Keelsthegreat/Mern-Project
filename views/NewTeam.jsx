const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class NewTeam extends React.Component {
  render() {
    let { trainers } = this.props;

    return (
      <div>
        <DefaultLayout />
        <h1>Create a Team</h1>
        <form action="/teams" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea name="description" required></textarea>
          <br />
          <label htmlFor="trainer">Trainer:</label>
          <select name="trainer">
            <option key="default-trainer" value="">
              Select a Trainer
            </option>
            {trainers.map((trainer) => (
              <option key={trainer._id} value={trainer._id}>
                {trainer.name}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" />
          <br />
          <button type="submit">Create a Team</button>
        </form>
      </div>
    );
  }
}

module.exports = NewTeam;
