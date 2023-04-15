
import './App.css';
import NavBar from './Components/NavBar';
import Pokedex from './Components/Pokedex';
import Regions from './Components/Regions';
import Team from './Components/Team';
import Index from './Components/Index';
import TrainerDisplay from './Components/TrainerDisplay';
import Trainers from './Components/Trainers';
import { Route , Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path= '/Index' element= {<Index/>}/>
      <Route path= '/Regions' element= {<Regions/>}/>
      <Route path= '/Team' element= {<Team/>}/>
      <Route path= '/Pokedex' element= {<Pokedex/>}/>

      </Routes>
    </div>
  );
}

export default App;
