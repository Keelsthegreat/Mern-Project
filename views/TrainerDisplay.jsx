const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class TrainerDisplay extends React.Component {
  render() {
    let { trainers } = this.props;
    console.log(typeof trainers, trainers);

    // const handleDelete = async (id) => {
    //   console.log("Trainer delete ID:", id);
    //   await axios.delete(`/trainers/${id}`);
    // };

    return (
      <div>
        <DefaultLayout />
        <div>
          <h1>Trainers</h1>
          <ul>
            {trainers.map((trainer) => (
              <li key={trainer._id}>
                <div>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    height={"auto"}
                    width={"200px"}
                  />
                </div>
                <p>
                  {trainer.name} - {trainer.age} - {trainer.hometown}
                </p>
                <form
                  action={`/trainers/${trainer._id}?_method=DELETE`}
                  method="POST"
                >
                  <button>Delete</button>
                </form>
                <form action = {`/trainers/${trainer._id}/edit`} method = "POST">
                <button>Edit</button>
              </form>
              </li>
            ))}
          </ul>
          <a href="/trainers/new">Create a Trainer</a>
        </div>
      </div>
    );
  }
}

module.exports = TrainerDisplay;
