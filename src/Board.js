import React, { Component } from 'react';
import _ from 'lodash'
import Card from './Card'
import Deck from './Deck'
import compareSet from './compare'

import './App.css';

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state= {
      deck: {},
      grid: [],
      cardsInPlay: [],
      selectedCardsArray: [],
      score: 0,
    }
    this.selectedCard = this.selectedCard.bind(this)
  }

  componentDidMount() {
    this.newGame()
  }

  newGame(){
    this.setState({selectedCardsArray: []})
    let deck= new Deck()
    const shuffledDeck = _.shuffle(deck.cards)
    let grid= [null, null, null, null, null, null, null, null, null, null, null, null]
    let afterDeal = this.deal(shuffledDeck, grid)
    this.setState({ deck: afterDeal.deck, grid: afterDeal.grid })
  }

   addCards() {
     let grid = this.state.grid
     const add3 = [null, null, null]
     const largeGrid = grid.concat(add3)
     this.deal()
     console.log("largeGrid", largeGrid)
   }

  deal(deck, grid) {
    let cardsInPlay = grid.map( (card, index) => {
      if (card === null) {
        return card = deck.pop()
      }
    })
    console.log("cardsInPlay::::::", cardsInPlay)
    let newCards = cardsInPlay.map( (card, index ) => {
      return <Card key={`card-${index}`} {...card} selectedCard={this.selectedCard} />
    })
    return { deck: deck, grid: newCards}
  }

  selectedCard(card) {
    let score = this.state.score
    let selectedCards = this.state.selectedCardsArray
    let cardsInPlay = this.state.cardsInPlay
    // for (var i = 0; i < this.state.cardsInPlay.length; i++) {
    //   cardsInPlay[i] = this.state.cardsInPlay[i]
    //   // console.log("this.state.grid[i].props", this.state.grid[i].props)
    //   // console.log("this.state.grid[i]", this.state.grid[i])
    //   // console.log("cardsInPlay[i]", cardsInPlay[i])
    // }
    for (var i = 0; i < selectedCards.length; i++) {
      if( _.isEqual(selectedCards[i], card) ) {
        selectedCards[i] = card
      }
    }
    this.setState({selectedCardsArray: selectedCards})
    if (selectedCards.includes(card)) {
      _.pull(selectedCards, card)
      // console.log("selectedCards after pull", selectedCards)
    } else {
      selectedCards.push(card)
    }
    console.log("selectedCards", selectedCards)
    if (selectedCards.length === 3) {
    //if set is match, change selcted cards to null in grid and run deal
      if ( compareSet(selectedCards) ) {
        alert("You're doing great!")
        this.setState({score: score + 1})
        // use the props of the Card Components (cardsInPlay) within the grid to accurtately compare to selected cards
        for (var i = 0; i < cardsInPlay.length; i++) {
          if ( _.isEqual(cardsInPlay[i], selectedCards[i]) ) {
            // console.log("cardsInPlay[i]", cardsInPlay[i].props)
            // console.log("selectedCards[i]", selectedCards[i])
            cardsInPlay[i] = null
          }
        }
        console.log("cardsInPlay", cardsInPlay)
        // let nulledSelectedFromGrid = cardsInPlay.map( gridCard => {
        //   console.log("gridCard.props", gridCard.props)
        //   if(_.isEqual(gridCard.props, card)) {
        //     gridCard.props = null
        //   }
        //   console.log("nulledSelectedFromGrid", nulledSelectedFromGrid)
        // })

        // this.setState( {grid: cardsInPlay} )
        this.deal()
      } else {
        alert("This is not a set")
        this.setState({selectedCardsArray: []})

      }
    }
  }


  render() {
    const game = this.state.grid
    return (
      <div>
        <button onClick={this.newGame.bind(this)}>New Game</button>
        <button onClick={this.addCards.bind(this)}>Add 3 Cards</button>
        <div className="score">
          Score:
          <br/>
          {this.state.score}
        </div>
        <div className="grid" >
        {game}
        </div>
      </div>
    );
  }
}
