const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class NewTrainer extends React.Component {
  render() {
    let { trainers } = this.props;
    
    // const getTeams = async () => {
    //   return await Team.find();
    // };
    // let { teams } = getTeams();

    return (
        <DefaultLayout>

      <div>
        <h1>New Trainer</h1>
        <form action="/trainers" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="Age">Age:</label>
          <input type="number" id="age" name="age" />
          <br />
          <label htmlFor="HomeTown">HomeTown:</label>
          <input type="text" id="hometown" name="hometown" />
          <br />
          <label htmlFor="Image">Image:</label>
          <input type="text" id="image" name="image" />
          <br />

          <input type="submit"></input>
        </form>
      </div>
        </DefaultLayout>
    );
  }
}

module.exports = NewTrainer;
