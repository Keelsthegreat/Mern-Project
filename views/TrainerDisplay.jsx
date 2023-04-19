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
        <DefaultLayout>
      
      <div className="trainerDis">
        <div>
          <h1>Trainers</h1>
          <ul class="list">
            {trainers.map((trainer) => (
              <li key={trainer._id} className = "trainer-card">
                

                <div>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    height={"195px"}
                    width={"200px"}
                    />
                </div>

                <p>
                  {trainer.name} 
                </p>
                
                  <p>Age: {trainer.age} </p> 
                
                  <p>Hometown: {trainer.hometown}</p>
                <form
                  action={`/trainers/${trainer._id}?_method=DELETE`}
                  method="POST"
                  >
                  <button>Delete</button>
                </form>
                <form action = {`/trainers/${trainer._id}/edit`} method = "GET">
                <button>Edit</button>
              </form>
                   
              </li>
            ))}
          </ul>
          <a href="/trainers/new">Create a Trainer</a>
        </div>
      </div>
            </DefaultLayout>
    );
  }
}

module.exports = TrainerDisplay;
