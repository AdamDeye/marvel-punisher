import React, {Component} from 'react';
import {Card} from 'react-bootstrap'  

export default class Comic extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    componentDidMount () {
        fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=1&title=${this.props.character}&apikey=46b78c9b781d7c3cb19367322ac9215a&hash=93307f35071d53b85ff3ffa532e904a9`)
        .then(response => response.json())
        .then(responseData => {
          var comicImage = responseData.data.results[0].thumbnail.path + '/portrait_small.jpg'
          var description = responseData.data.results[0].description
          this.setState({comicImage, description})
          console.log('Fetch results for ' + this.props.character + ' ' + comicImage)
          console.log(responseData.data.results[0].description)
        })
    
        .catch (error => {
          console.log('Error fetching and parsing data', error)
        })
    
      }

    render() {
        return (
            <Card className='card'>
                {this.state.comicImage && <Card.Img variant="top" src={this.state.comicImage} />}
                <Card.Body>
                <Card.Title className='cardTitle'>{this.props.character}</Card.Title>
                <Card.Text>
                {this.state.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        );
    }
};