import React, { Component } from 'react';
import { getCards } from '../services/cardsApi';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Card,
} from 'semantic-ui-react';

class MyCards extends Component {
  state = {
    cards: [],
  }

  componentDidMount() {
    getCards()
    .then((response) => {
      response.json()
      .then((data) => {
        this.setState({ cards: data })
      })
    })
  }

  render() {
    return (
      <div>
          <div className = 'my-cards'>
            <h3> MY FAVORITES </h3>

            <Card.Group>
              { (this.state.cards).filter(card => card.section === 'mfs').map( (card) => (
                <Card>
                  <Card.Content>
                    <Image alt = 'image-not-found' className = 'cards-image' src = { card.image } />

                    <Card.Meta>
                      <span> { card.meta } </span>
                    </Card.Meta>

                    <Icon color = 'red' corner name = 'remove' >
                    </Icon>

                  </Card.Content>
                </Card>
              ))}
            </Card.Group>

          </div>
      </div>
    );
  }

}

export default MyCards;
