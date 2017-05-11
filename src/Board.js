import React, { Component } from 'react';
import _ from 'lodash'
import Card from './Card'
import Deck from './Deck'

import './App.css';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state= {
      deck: {},
      grid: [],
      selectedCardsArray: []
    }
  }

  componentDidMount() {
    this.newGame()
  }

  newGame(){
    let deck= new Deck()
    let grid= [null, null, null, null, null, null, null, null, null, null, null, null]
    let stuff = this.deal(deck, grid)
    this.setState({ deck: stuff.deck, grid: stuff.grid })
  }

  deal(deck, grid) {
    const shuffledDeck = _.shuffle(deck.cards)
    let cardsInPlay = grid.map( (card, index) => {
      if (card === null) {
        return card = shuffledDeck.pop()
      }
    })
    let newCards = cardsInPlay.map( (card, index ) => {
      return <Card
        image={card.image}
        key={card.index}
        number={card.number}
        color={card.color}
        shape={card.shape}
        shading={card.shading}
        // remove unused properties
        selected={card.selected}
        className={card.className}
        selectedCard={this.selectedCard}
      />
    })
    return { deck: shuffledDeck, grid: newCards }
  }

// States and functions within Board Component are not useable within selectedCard function (below).
  selectedCard(card) {
    console.log("card:::", card)
    let emptyArray = []
    let selectedCardsArray = emptyArray.push( card )
    console.log("selectedCardsArray", selectedCardsArray)
  }


  // selectedArray() {
  //   console.log("this.selectedCard", this.selectedCard);
  //   let selectedCardsArray = []
  //   if (selectedCardsArray.length < 4) {
  //     selectedCardsArray.push(this.selectedCard)
  //   } else {
  //     console.log("this set is full!")
  //   }
  //   // this.setState({selectedCards: selectedCardsArray})
  //   console.log("selectedCardsArray", selectedCardsArray)
  // }

  render() {
    console.log("Can I invoke the function?", this.selectedCard())
    const game = this.state.grid
    return (
      <div>
        <button onClick={this.newGame.bind(this)}>New Game</button>
        <div className="grid" >
        {game}
        </div>
      </div>
    );
  }
}
