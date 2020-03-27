import React, { useState, useEffect } from 'react';
import './App.css';
import Card2 from './components/card2'
import Card4 from './components/card4'

import timRentaBike from './empresas/timRentABike'
import timRentaBike2 from './empresas/timRentABike2'
import timRentaBike3 from './empresas/timRentABike3'
import timRentaBike4 from './empresas/timRentABike4'
import timRentaBike5 from './empresas/timRentABike5'
import { Card } from '@material-ui/core';

const empresas = [
  timRentaBike, timRentaBike2, timRentaBike3]


function App() {

  const [width, updateWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", handleRisize);
    return () => {
      window.addEventListener("resize", handleRisize)
    }
  })

  const handleRisize = () => {
    updateWidth(window.innerWidth / 2 + 'px')
    //console.log(height)
  }

  


  return (
    <div className="App">
      <header >
        <p>
          Servicios a domicilio y para llevar en
        </p>
        <h3>
          LA PAZ, B.C.S.
        </h3>
      </header>

      <div
        style={{
          backgroundColor: 'blue',
          width: '10px',
          height: '10px',
          position: 'relative',
          left: width / 2 + 'px'
        }}>
        {empresas.map( empresa => 
        <Card4 info={empresa}/>
          )}

      </div>
      
    </div>
  );
}

export default App;
