import React from 'react'

// Using Bootstrap
import {CardColumns} from 'react-bootstrap'

import CharCard from './CharCard';

const CharCards = () => {

    return (
        <CardColumns>

            <CharCard character="Hulk" />  
            <CharCard character="Thanos" />
            <CharCard character="Spider-Man" />  
            <CharCard character="Iron Man" />  
            <CharCard character="Thor" />   
            <CharCard character="Captain America" />           
            
        </CardColumns>
    )
}

export default CharCards