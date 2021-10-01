import React from 'react'
import { useAuth } from '../providers/auth'
import * as s from './styles/styled-LocationDetails'

export default function LocationDefault() { //recebendo objeto da API

    const {data} = useAuth() 

    return(
        <s.LocationField>
            <div>
                <span>IP Adress</span>
                <p>{data.ip}</p> {/*ip*/}
            </div> 
            <div>
                <span>Location</span>
                <p>{data.location?.city}, {data.location?.region}</p> {/*Cidade / região*/}
            </div>
            <div>
                <span>Timezone</span>
                <p>UTC{data.location?.timezone}</p> {/*Fuso horário*/}
            </div>
            <div>
                <span>ISP</span>
                <p>{data.as?.name}</p> {/*ISP*/}
            </div>
        </s.LocationField>
    )
}