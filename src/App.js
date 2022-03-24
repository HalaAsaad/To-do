import './App.css';
import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './MainPage';
import Weather from './Weather';

function App() {
  const [Mode, setMode] = React.useState('light');
  const handleMode = (event, newMode) => {
    setMode(newMode);
  };
  return (
    <div className={`${Mode} App`}>
      
      <nav>
        <ToggleButtonGroup
        value={Mode}
        exclusive
        onChange={handleMode}
        aria-label="mode"
        style={{background:'#fff', marginBottom:'25px'}}
        >
          <ToggleButton value="light" aria-label="left aligned">
            <WbSunny />
          </ToggleButton>
          <ToggleButton value="dark" aria-label="centered">
            <Brightness2 />
          </ToggleButton>
        </ToggleButtonGroup>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/Weather">Weather</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
      
    </div>
  );
}

export default App;
