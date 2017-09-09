import React, { Component } from 'react';

import Card from './Card.js';

import '../styles/Cardholder.css';
import '../styles/Card.css'

class Cardholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPossibleCards: 0
    }
    this.renderCards = this.renderCards.bind(this);
    this.renderInitialCard = this.renderInitialCard.bind(this);
    this.renderNoResultsCard = this.renderNoResultsCard.bind(this);
    this.findPlanet = this.findPlanet.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);


  }

  renderInitialCard() {
    if(this.props.userRequestedData.length === 0) {
      return (
        <div className="InitialCard">
          <p className="centerText">Welcome to the Star Wars Database!</p>
          <p className="centerText"> Feel free to search for anything and everything you wish to know about the Star Wars universe!</p>
        </div>
      )
    }
  }
  renderNoResultsCard() {
    if(this.props.userRequestedData.data !== undefined && this.props.userRequestedData.data.length === 0) {
      return (
        <div className="InitialCard">
          <p className="centerText">Sorry, your search returned no results</p>
        </div>
      )
    }
  }

  renderCards(cards) {

    if(cards.data !== undefined){
      return cards.data.map((card, index) => {
        var planetInfo = this.findPlanet(card)[0]

        if(planetInfo === undefined) {
          planetInfo = { name: 'unknown'};
          return (
              <Card key={index} cardData={card} planet={planetInfo}/>
          );
        };

        return (
            <Card key={index} cardData={card} planet={planetInfo}/>
        );
      })
    }
  }
  findPlanet(card) {
    return this.props.planetsObject.filter(function(key) {
      return card.homeworld === key.url;
    })
  }

  nextPage() {
    if( this.props.userRequestedData.headers['x-total-count']) {
      var pagePlusOne= this.props.currentPageNumber + 1;
      this.props.updatePage(pagePlusOne);
    }
  }
  previousPage() {
    if(this.props.currentPageNumber !== 1) {
      var pageMinusOne= this.props.currentPageNumber - 1;
      this.props.updatePage(pageMinusOne);
    }
  }
  setTotalCount() {
    this.setState({totalPossibleCards: this.props.userRequestedData.headers['x-total-count']})
  }


  render() {
    console.log('this.state in cardholder', this.state);
    return (
      <div className="Cardholder">
        {this.renderInitialCard()}
        {this.renderNoResultsCard()}
        {this.renderCards(this.props.userRequestedData)}
        <div className="links">
          <a className="previousePage" onClick={this.previousPage} disabled={'disabled'}>PreviousPage</a>
          <a>...</a>
          <a className="nextPage" onClick={this.nextPage}>NextPage</a>
        </div>
      </div>
    );
  }
}

export default Cardholder;
