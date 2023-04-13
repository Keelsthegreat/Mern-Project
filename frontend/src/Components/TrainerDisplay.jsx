import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function TrainerDisplay() {
    const {id} = useParams
    const [trainerDis ,setTrainerDis] = useState (null);

    const [teamName ,setTeamName] = useState('');

    useEffect(() => {
        axios.get(`/api/trainers/${id}`)
        .then(res => {
            setTrainerDis(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/api/trainers/${id}/teams`, {name:teamName})
        .then(res => {
            setTrainerDis(res.data)
            setTeamName('')
        })
        .catch(err => {
            console.log(err)
        })
    }  
    if (!trainerDis) {
        return <div>Trainer Not Found...</div>
    }
    return(
        <div>
            <h1>{trainerDis.name}</h1>
            <ul>
                {trainerDis.teams.map(crew => (
                    <li key={crew._id}></li>
                ))}
            </ul>
        </div>
    )
}