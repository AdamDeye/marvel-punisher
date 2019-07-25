import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import CharCard from './CharCards';
import Series from './Series'
import Comics from './Comics'

const NavBar = () => (

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className='nav'>

        <Tab eventKey="profile" title="Characters">
            <CharCard />
        </Tab>

        <Tab eventKey="home" title="Comics">
            <Comics />
        </Tab>

        <Tab eventKey="contact" title="Series">
            <Series />
        </Tab>
        
    </Tabs>

)

export default NavBar