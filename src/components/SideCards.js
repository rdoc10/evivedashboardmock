import React, {Component} from 'react';
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

class SideCards extends Component {
  state = {
    cards: [],
  }

  componentDidMount() {
    getCards()
    .then((response) => {
      response.json()
      .then((data) => {
        console.log(data)
        this.setState( { cards: data } )
      })
    })
  }

  render() {
    return (
      <div>
              <div className = 'side-cards'>
              {console.log(this.state)}
              { (this.state.cards).filter(card => card.section === 'side-cards').map((card) => (
                <Card>
                  <Card.Content>
                    <Image alt = 'image-not-found' className = 'cards-image' src = { card.image } />

                    <Card.Header>
                      { card.header }
                    </Card.Header>

                    <Card.Meta>
                      { card.meta }
                    </Card.Meta>

                    <Card.Description>
                      <span>
                        { card.description }
                      </span>
                    </Card.Description>

                  </Card.Content>
                </Card>
              ))}
              </div>

      </div>

    );
  }

  // fetchData() {
  //   getCards()
  //   .then(response => response.json())
  //   .then(parsedJSON => parsedJSON.cardsToPositions.map (user => (
  //     {
  //
  //     }
  //   )))
  //
  //   .catch(error => console.log('parsing is failed', error))
  // }

}

export default SideCards;
