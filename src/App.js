import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Kelvin from './components/pages/Kelvin';
import Celcius from './components/pages/Celcius';
import Farenhite from './components/pages/Farenhite';

function App() {
  return (
    <>
    <Welcome/>
      <Navbar />
      <Routes>
        <Route path='/Kelvin' element={< Kelvin/>}/>
        <Route path='/Farenhite' element={< Farenhite/>}/>
        <Route path='/Celcius' element={< Celcius/>}/>
      </Routes>
    </>
  );
}

export default App;
