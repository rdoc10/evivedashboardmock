import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import '../styles/AppDashboard.css'
import {
  Card,
  Image,
  Icon,
} from 'semantic-ui-react';
import { getCards } from '../services/cardsApi';

const SortableItem = SortableElement(( {value} ) => (
  <Card>
    <Card.Content>
      <Image className = 'cards-image' alt = 'image-not-found' src = { value.image } />
      <div className = 'cards-desc'>
      <Icon color = 'red' corner name = 'remove' />
        <Card.Meta>
          <div className = 'meta-value'>
            { value.meta }
          </div>
        </Card.Meta>

      </div>
    </Card.Content>
  </Card>
));

const SortableList = SortableContainer(( {items} ) => {
  return (
    <div>
      <Card.Group>
        { items.map(( value, index ) => (
          <SortableItem key = { `item-${index}` } index = {index} value = {value}  />
        ))}
      </Card.Group>
    </div>
  );
});

class SortableCards extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    getCards()
    .then( (response) => {
      response.json()
        .then( (data) => {
          this.setState( { items: data.filter( cards => cards.section === 'mfs' ) });
        });
    });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    return <SortableList axis = 'x' items = { this.state.items } onSortEnd = { this.onSortEnd } />
  }

}

export default SortableCards;
