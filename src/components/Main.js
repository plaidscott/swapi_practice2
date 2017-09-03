import React, { Component} from 'react';
import api from '../utils/api/api.js';

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
    this.test();
    return (
      <div>
        <div>Hello there from Main!</div>
      </div>
    )
  }
}

export default Main;
