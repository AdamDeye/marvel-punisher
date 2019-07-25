import React, {Component} from 'react';
import {Card} from 'react-bootstrap'  

export default class CharCard extends Component {
    constructor(props) {
        super();
        this.state = {};
    }

    componentDidMount () {
        fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${this.props.character}&apikey=46b78c9b781d7c3cb19367322ac9215a&hash=93307f35071d53b85ff3ffa532e904a9`)
        .then(response => response.json())
        .then(responseData => {
          var image = responseData.data.results[0].thumbnail.path + '/portrait_medium.jpg'
          var description = responseData.data.results[0].description
          this.setState({image, description})
        //   console.log(responseData.data.results[0].description)
        })
    
        .catch (error => {
          console.log('Error fetching and parsing data', error)
        })
    
      }

    render() {
        return (
            <Card className='card'>
                {this.state.image && <Card.Img variant="top" src={this.state.image} />}
                <Card.Body>
                <Card.Title className='cardTitle'>{this.props.character}</Card.Title>
                <Card.Text>
                    {this.state.description}
                </Card.Text>
                </Card.Body>
            </Card>
        );
    }
};