import React, { useState, useEffect, Fragment } from 'react'

import Header from './components/Header'
import Map from './components/Map'
import * as s from './components/styles/styled-App'

function App() {

  const [current, setCurrent] = useState({})
  const [location, setLocation] = useState(false)

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position) => {
        setCurrent({lat:position.coords.latitude, long:position.coords.longitude}) //recuperando lat e long ao abrir o app
        setLocation(true) //caso o usuario permita o acesso a localização poderá visualizar o app
    })

  }, []) //código para pedir autorização do usuario e ler as coordenadas

  if(location == false) {
    return (
        <Fragment>
            Habilite sua localização para melhor uso da aplicação
        </Fragment>
    )
} else {
      return (
        <s.Container>
          <Header setCurrent={setCurrent}/> 
          <Map current={current}/>
        </s.Container>
      );
  }
}
export default App;
