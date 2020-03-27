import React, { useState, useEffect } from 'react';
import './App.css';
import Card2 from './components/card2'
import Card3 from './components/card3'

const camarones = {
  titulo: 'camarones la paz',
  telefono: '55 54 67 98',
  url: 'https://www.timrentabike.com/',
  styles: {
    backgroundColor: 'orange',
    left: "-150",
    top: "180",
    zIndex: 2
  }
}

const rentABike = {
  titulo: 'Renta de bicicletas',
  telefono: '654 345 34',
  url: 'https://www.timrentabike.com/',
  styles: {
    backgroundColor: 'blue',
    left: "1",
    top: "200",
    zIndex: 4
  }
}

const helados = {
  titulo: 'Helados La Paz',
  telefono: '54 098 234',
  url: 'https://www.timrentabike.com/',
  styles: {
    backgroundColor: 'red',
    left: "-200",
    top: "-100",
    zIndex: 3
  }

}

const toritllas = {
  titulo: 'Tortilleria',
  telefono: '654 34 45',
  url: 'https://www.timrentabike.com/',
  styles: {
    backgroundColor: 'green',
    left: "100",
    top: "300",
    zIndex: 4
  }
}

const copiadora = {
  titulo: 'Centro de copiado',
  telefono: '654 345 34',
  url: '',
  styles: {
    backgroundColor: 'violet',
    left: "40",
    top: "-100",
    zIndex: 4
  }
}


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
      <div style={{backgroundColor:'blue', width:'10px', height:'10px', position:'relative', left:width / 2 + 'px'}}>
        <Card2 info={toritllas} />
        <Card2 info={copiadora} />
        <Card2 info={camarones} />
        <Card2 info={rentABike} />
        <Card2 info={helados} />

      </div>
    </div>
  );
}

export default App;
