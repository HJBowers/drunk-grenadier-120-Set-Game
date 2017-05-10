import React, { Component } from 'react';
import _ from 'lodash'
import Card from './Card'
import Deck from './Deck'

import './App.css';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: new Deck(),
      cardsInPlay: [null, null, null, null, null, null, null, null, null, null, null, null]
    }
  }

  componentDidMount() {
    this.fillGrid()
  }

  fillGrid() {
    const deck = _.shuffle(this.state.deck.cards)
      let cardsInPlay = this.state.cardsInPlay.map( (card, index) => {
        if (card === null) {
          return card = deck.pop()
        }
      })
      let newCards = cardsInPlay.map( (card, index ) => {
        return <Card
          image={card.image}
          key={card.index}
          id={card.number}
          color={card.color}
          shape={card.shape}
          shading={card.shading}
          selected={card.selected}
          className={card.className}
        />
      })
    this.setState({cardsInPlay: newCards, deck: deck })
  }

  render() {
    let deck = this.state.cardsInPlay
    return (
      <div className="App">
      <p> It's here! </p>
      {deck}
      </div>
    );
  }
}
