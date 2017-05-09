import React, { Component } from 'react'
import Deck from "../../../deck"

export default class Card extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

// Make function that maps out cards into individual cards with properties from deck




render() {
  const cards = this.props.cards
  .map( (card, index) => {
    return (
      <div key={index} card={card} /> )
    )

  return (
    <div style={}>
      {cards}
    </div>
  )
}
}
