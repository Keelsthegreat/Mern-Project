import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Trainers() {
    const [ trainers, setTrainers] = useState ([]);

    const [name, setName] = useState ('')

    useEffect(() => {
        axios.get ('/api/trainers')
        .then(res => {
            setTrainers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []) 
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/trainers',{name})
        .then(res =>{
            setTrainers([...trainers,res.data])
            setName('')
        })
        .catch(err => {
            console.log(err)
        }) 
    }
    return(
        <div>
            <h1>Trainers</h1>
            <ul> 
                {trainers.length > 0 && trainers.map(trainee => (
                    <li key={trainee._id}>
                        <Link to={`/trainers/${trainee.id}`}>{trainee.name}</Link>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
                <button type='submit'>Create Trainer</button>
            </form>
        </div>
    )
}

export default Trainers;