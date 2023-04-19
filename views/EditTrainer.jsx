const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

function EditTrainer(props) {
  const { trainer } = props;

  return (
    <div>

    <DefaultLayout/>
      <h1>Edit Trainer</h1>
      <form action={`/trainers/${trainer._id}/edit?_method=PUT`} method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={trainer.name}/>
        </div>
        <label htmlFor = "age">Age:</label>
        <input type = "number" id = "age" name = "age" defaultValue = {trainer.age}/>
        <div>
        <div>
            <label htmlFor = "hometown">HomeTown:</label>
            <input type = "text" id = "hometown" name = "hometown" defaultValue = {trainer.hometown}/>
        </div>
          <label htmlFor="image">Image:</label>
          <input type="url" id="image" name="image" defaultValue={trainer.image} />
        </div>
       <button type="submit">Save</button> 
      </form>
   
    </div>
  );
}

module.exports = EditTrainer;
