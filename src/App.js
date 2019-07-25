import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

// App Components
import NavBar from './components/NavBar'
import CharCards from './components/NavBar'
import Comics from './components/Comics'
import Series from './components/Series'

export default class App extends Component {
 
  render () {

    return (
      <BrowserRouter className='.background'>  

          <NavBar /> 

          {/* Navigable Routes */}
          <Route path='/CharCards' render={(charcters) => <CharCards />} />
          <Route path='/Comics' component={Comics}/>
          <Route path='/Series' component={Series} />

      </BrowserRouter>
    )
  }
}