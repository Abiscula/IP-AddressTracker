import React from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { useAuth } from '../providers/auth';
import * as s from './styles/styled-Map'

export default function Map() { //recebendo objeto da API

  const { current } = useAuth()

  function ChangeView(coords) { //função para chamar a render de um "novo mapa" após requisição por IP
    const map = useMap();
    map.setView(coords.center, 15); //objeto com localização / zoom
    return null;
  }

  return( // MapContainer recebe lat e long como parametro para renderizar o mapa.
      <s.MapField>
        <MapContainer center={[current.lat, current.long]} zoom={15} scrollWheelZoom={false}>
        <ChangeView center={[current.lat, current.long]} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[current.lat, current.long]} icon={s.IconLocation}>
          </Marker>
        </MapContainer>
      </s.MapField>
  )
}
