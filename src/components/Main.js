import React, { Component} from 'react';
import api from '../utils/api/api.js';

import Search from './Search.js';
import Cardholder from './Cardholder.js'

import '../styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }
  test() {
    api.test()
      .then( response => {
        console.log('response in main.js from test', response);
      })
  }

  render() {
    return (
      <div className="Main">
        <div>Hello there from Main!</div>
        <Search/>
        <Cardholder/>
      </div>
    )
  }
}

export default Main;
