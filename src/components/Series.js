import React from 'react'
import {CardColumns} from 'react-bootstrap'

// Import Component
import Event from './CreateSeries'

const Comics = () => (

    <CardColumns>

        <Event character='Punisher'/>
        <Event character='X-Men'/>
        <Event character='Avengers'/>
        <Event character='Fantastic Four'/>
        <Event character='S.H.I.E.L.D.'/>
        <Event character='Runaways'/>
        <Event character='Guardians of the Galaxy'/>
        <Event character='Starforce'/>


    </CardColumns>

)

export default Comics