import React, { Fragment, useState } from 'react'
import LocationDefault from './Location Details'
import axios from 'axios'
import {ReactComponent as Arrow} from './styles/images/icon-arrow.svg'
import * as s from './styles/styled-Header'


export default function Header({setCurrent}) {

  const key = '' //key da API
  const [ip, setIp] = useState('') //armazena o IP digitado pelo usuario
  const [data, setData] = useState('')
  
  let getIP = async (ip) => {
    let req = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`) //requisição para API com IP informado pelo usuario
    setData(req.data) //objeto retornado da API
    setCurrent({lat:req.data.location.lat, long:req.data.location.lng}) //LAT & LONG retornada do objeto da API com base no IP informado
  }

    return(
      <Fragment>
        <s.HeaderField>
            <h2>IP Address Tracker</h2>
            <div>
              <s.Search 
                type="text"
                placeholder="Search for any IP address or domain"
                onChange={(event) => setIp(event.target.value)} //Arrow function anonima que recupera o IP e armazena no estado
              />
              <s.Button onClick={() => getIP(ip)}><Arrow/></s.Button>
            </div>
        </s.HeaderField>
        <LocationDefault data={data}/> 
      </Fragment>
    )
}
