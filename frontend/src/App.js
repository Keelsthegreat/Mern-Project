
import './App.css';
import NavBar from './Components/NavBar';
import Pokedex from './Components/Pokedex'
import Regions from './Components/Regions'




function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path= '/' element= {<Home/>}/>
      <Route path= '/' element= {<Regions/>}/>
      <Route path= '/' element= {<Create Your Team/>}/>
      <Route path= '/' element= {<Pokedex/>}/>

      </Routes>
    </div>
  );
}

export default App;
