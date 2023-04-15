import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function TrainerDisplay() {
    const {id} = useParams
    const [trainerDis ,setTrainerDis] = useState (null);

    const [teamName ,setTeamName] = useState('');

    const fetchTrainer = async () => {
        const response = await axios.get(`/api/trainers/${id}`)
        setTrainerDis(response.data)
    }

    useEffect(() => {
        fetchTrainer();
    },[id])


    const handleDeleteTeam = async (teamId) => {
        await axios.delete(`/api/trainers/${id}/teams/${teamId}`);
        fetchTrainer();
    }



    if (!trainerDis) {
        return <div>Trainer Not Found...</div>
    }
    return(
        <div>
            <h2>{trainerDis.name}'s Team</h2>
            <form onSubmit = {async (e) => {
                e.preventDefault();
                await axios.post(`/api/trainers/${id}/teams`, {teamName})
                setTeamName('');
                fetchTrainer();
            }} 
            >
              <label>
                Add a Team:
                <input type = "text" value = {teamName} onChange = {(e) => setTeamName(e.target.value)}/>
                </label>  
                <button type = "submit">Add</button>
            </form>
            <ul>
                {trainerDis.teams.map(crew => (
                     <>
                    <li key = {crew._id}>
                        {crew.name}

                        <ul>
                            {crew.pokemon.map(pkmn => (
                                <li key = {pkmn._id}>
                                    {pkmn.name} - level {pkmn.level}
                                </li>
                            ))}
                        </ul>
                    </li>
                <form onSubmit = {handleDeleteTeam(crew._id)}>
                    <button type = "submit">Delete Team</button>
                </form>
                    </>
                ))}
            </ul>
            
                

        </div>
    )
}

export default TrainerDisplay