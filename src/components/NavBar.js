import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import CharCard from './CharCards';
import Creator from './Creator'
import Comics from './Comics'

const NavBar = () => (

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">

        <Tab eventKey="profile" title="Characters">
            <CharCard />
        </Tab>

        <Tab eventKey="home" title="Comics">
            <Comics />
        </Tab>

        <Tab eventKey="contact" title="Creator">
            <Creator />
        </Tab>
        
    </Tabs>

)

export default NavBar