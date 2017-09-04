import React, { Component } from 'react';

import Card from './Card.js';

import '../styles/Cardholder.css';

class Cardholder extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }
  renderCards(cards) {
    console.log('this.props in Cardholder.js', this.props);
    console.log('cards in Cardholder.js', cards);
    return cards.map((card, index) => {
      return (
        <div key={index}>
          <Card cardData={card}/>
        </div>
      );
    })
  }
  render() {
    console.log('this.props in Cardholder.js', this.props.userRequestedData);
    return (
      <div className="Cardholder">
        {this.renderCards(this.props.userRequestedData)}
      </div>
    );
  }
}

export default Cardholder;
