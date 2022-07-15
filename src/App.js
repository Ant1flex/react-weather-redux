import './App.css';
import React from 'react'
import FormSearchContainer from './components/FormSearchContainer'
import WeatherInfoContainer from './components/WeatherInfoContainer'
import Hint from './components/Hint'

function App() {
  return (
      <div className='field'>
        <Hint></Hint>
        <div className='container'>
          <FormSearchContainer></FormSearchContainer>
          <WeatherInfoContainer></WeatherInfoContainer>
        </div>
      </div>
  );
}

export default App;
