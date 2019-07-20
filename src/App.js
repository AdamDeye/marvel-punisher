import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

// App Components
import NavBar from './components/NavBar'
import CharCards from './components/NavBar'
import Comics from './components/Comics'
import Creator from './components/Creator'

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      characters: ["0".thumbnail]
    }
  }

  componentDidMount () {
    fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&name=Punisher&apikey=46b78c9b781d7c3cb19367322ac9215a&hash=93307f35071d53b85ff3ffa532e904a9')
    .then(response => response.json())
    .then(responseData => {
      this.setState({characters: responseData.data.results})

      
    })

    .catch (error => {
      console.log('Error fetching and parsing data', error)
    })

  }
    
    
  render () {

    console.log(this.state.characters.results)
    // const character = this.state.characters;

    return (
      <BrowserRouter>  
        
        <div>
          {/* <img alt="punisher" src="http://i.annihil.us/u/prod/marvel/i/mg/3/90/5261675f6b22f/portrait_medium.jpg"/> */}
          {/* <p>{characters}</p> */}
          {/* <img alt="punisher" src="this.state.characters" /> */}

          <NavBar /> 

          <Route path='/CharCards' render={() => <CharCards />} />
          <Route path='/Comics' component={Comics}/>
          <Route path='/Creator' component={Creator} />

        </div>

      </BrowserRouter>
    )
  }
}