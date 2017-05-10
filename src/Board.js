import React, { Component } from 'react';
import _ from 'lodash'
import Card from './Card'
import Deck from './Deck'

import './App.css';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state= {
      deck: new Deck(),
      grid: [null, null, null, null, null, null, null, null, null, null, null, null]
    }
  }

  newGame(){
    let deck= new Deck()
    let grid= [null, null, null, null, null, null, null, null, null, null, null, null]
    this.setState({ grid, deck })
    this.fillGrid()
  }

  componentDidMount() {
    this.fillGrid()
  }

  fillGrid() {
    const shuffledDeck = _.shuffle(this.state.deck.cards)
    let cardsInPlay = this.state.grid.map( (card, index) => {
      if (card === null) {
        return card = shuffledDeck.pop()
      }
    })
    let newCards = cardsInPlay.map( (card, index ) => {
      console.log("card object:::", card);
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
    this.setState({ grid: newCards, deck: shuffledDeck })
  }



  render() {
    const deck = this.state.grid
    return (
      <div>
        <button onClick={this.newGame.bind(this)}>New Game</button>
        <div className="grid">
        {deck}
        </div>
      </div>
    );
  }
}
