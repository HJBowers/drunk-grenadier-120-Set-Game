import React, { Component } from 'react';

import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.props.selectedCard(this.props)
  }


  render() {
    return (
      <div className='card' onClick={this.clickHandler}>
        <img className='img' src={this.props.image} alt='null' />
      </div>
    )
  }

}
