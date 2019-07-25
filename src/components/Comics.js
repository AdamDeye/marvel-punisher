import React from 'react'
import {CardColumns} from 'react-bootstrap'

// Import Component
import Comic from './Comic'

const Comics = () => (

    <CardColumns>

        <Comic character="Hulk" /> 
        <Comic character="Punisher" /> 
        <Comic character="Avengers" /> 
        <Comic character="Fantastic Four" /> 
        <Comic character="S.H.I.E.L.D." /> 
        <Comic character="Guardians of the Galaxy" /> 
        <Comic character="Starforce" /> 

    </CardColumns>

)

export default Comics