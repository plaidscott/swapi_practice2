import React, { Component } from 'react';

import api from '../utils/api/api.js';

import '../styles/Card.css';

class Card extends Component {
  constructor(props){
    super(props)
    this.editName=this.editName.bind(this);
    this.editHomeworld= this.editHomeworld.bind(this);
  }

  editName() {
    alert('edit name')
  }
  editHomeworld() {
    alert('edit homeworld')

  }
  render() {
    return (
      <div className="Card">
        <p  className="inline-block">Name: {this.props.cardData.name}</p><span className='edit'><img onClick={this.editName} className='edit' src={require('../media/editSymbol.png')} alt={'edit symbol'}/></span>
        <p className="inline-block">Homeworld: {this.props.planet.name}</p><span className='edit'><img onClick={this.editHomeworld} className='edit' src={require('../media/editSymbol.png')} alt={'edit symbol'}/></span>
      </div>
    );
  }
}

export default Card;
