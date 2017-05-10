import React, { Component } from 'react';
import Deck from './Deck'

import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }




  render() {
    return (
      <div className='card'>
        <img className='img' src={this.props.image} />
      </div>
    )
  }

}
