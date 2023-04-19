const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

function EditTrainer(props) {
  const { pokemon } = props;

  return (
    <DefaultLayout>

    <div>

      <h1>Edit Trainer</h1>
      <form action={`/pokemon/${pokemon._id}/edit?_method=PUT`} method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={team.name}/>
        </div>
        <label htmlFor = "description">Description:</label>
        <textarea name= "description" defaultValue = {team.description}/>
        <div>
        <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" defaultValue={team.image} />
        </div>
       <button type="submit">Save</button> 
      </form>
   
    </div>
    </DefaultLayout>
  );
}

module.exports = EditTrainer;
