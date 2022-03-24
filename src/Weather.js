import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';

const Weather = () => {
    const [Location, setLocation] = useState('London')
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'b0dd0eb50f4813205a630ff52f1e534b',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', 
  });
  return (
      <>
        <TextField 
        className='location-field' 
        value={Location} 
        onChange={(e) => setLocation(e.target.value)} 
        id="standard-basic" 
        label="Enter Location" 
        style={{marginBottom:'30px'}} />
        <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={Location} 
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
        />
      </>
  );
};
export default Weather;