import React, { Component} from 'react';
import api from '../utils/api/api.js';

import Search from './Search.js';
import Cardholder from './Cardholder.js'

import '../styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
      userRequestedData: []
    }
    this.sendResponseToCard = this.sendResponseToCard.bind(this);
  }
  test() {
    api.test()
      .then( response => {
        console.log('response in main.js from test', response);
      })
  }
  sendResponseToCard(userRequestedData) {
    console.log('userRequestedData in sendResponseToCard in Main.js', userRequestedData )
    this.setState({ userRequestedData: userRequestedData})
  }

  render() {
    return (
      <div className="Main">
        <div>Hello there from Main!</div>
        <Search sendResponseToCard={this.sendResponseToCard}/>
        <Cardholder userRequestedData={this.state.userRequestedData}/>
      </div>
    )
  }
}

export default Main;
