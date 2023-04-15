import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {


  return (
    <div className='navbar'>
        <div className=''>
        <ul className=''>
            <li>
              <Link to = '/Index'>Home</Link>
            </li>
            <li>
                <Link to='/Pokedex'>Pokedex</Link>
            </li>
            <li>
                <Link to= '/Regions'>Regions</Link>
            </li>
            <li>
                <Link to= '/Create Your Team'>Create Your Team</Link>
            </li>
        </ul>

        </div>


    </div>
  )
}

export default NavBar