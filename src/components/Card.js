import React, { Component } from 'react';

import '../styles/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div>Hellow there from Card.js</div>
        <p>Name: {this.props.cardData.name}</p>
      </div>
    );
  }
}

export default Card;
