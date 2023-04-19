const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

function EditTrainer(props) {
  const { trainer } = props;

  return (
    <DefaultLayout>

    <div className='editTrainerDis'>

      <h1 className="form-title">Edit Trainer</h1>
      <form action={`/trainers/${trainer._id}/edit?_method=PUT`} method="POST" className="edit-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={trainer.name} className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="hometown">HomeTown:</label>
          <textarea name="hometown" defaultValue={trainer.hometown} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" defaultValue={trainer.image} className="form-control" />
        </div>
       <button type="submit" className="btn btn-primary">Save</button> 
      </form>
   
    </div>
    </DefaultLayout>
  );
}

module.exports = EditTrainer;
