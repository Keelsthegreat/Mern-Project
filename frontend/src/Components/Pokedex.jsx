import React, { useState , useEffect } from 'react';
import axios from 'axios';



function pkdex() {
  
        const [pdex, setPdex] = useState ([]);
    
        const [selectedPdex, setSelectedPdex] = useState(null)
    
    
        useEffect(() => {
            async function fetchData() {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/name')
                //api link ^
                setPdex(Object.values(response.data))
                console.log(pdex)
            }
            fetchData()
        }, []);
    
    function handleClick(pd) {
        setSelectedPdex(pd)
    }
    
    
    return (
        <div className='container'>
            <h1 className='header'>Pokedex</h1>
        </div>
    )
    }


