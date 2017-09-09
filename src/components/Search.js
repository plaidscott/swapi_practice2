import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import api from '../utils/api/api.js'

import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearchInput: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput ( e ) {
    e.preventDefault();
    this.setState({ userSearchInput: e.target.value});
  }
  handleSearch ( e ) {
    if(e.keyCode === 13 && this.state.userSearchInput.length !== 0) {
      e.preventDefault();
      this.props.sendUserSearchInputToMain(this.state.userSearchInput)
      api.userSearch(this.state.userSearchInput, this.props.currentPageNumber)
        .then( response => {
          console.log('response in handleSearch, api.userSearch', response)
          this.props.sendResponseToCard(response)
        })
    }
  }

  componentWillMount(){
    api.initialData()
      .then( response => {
        console.log('response in handleSearch, api.initialData', response)
        this.props.sendResponseToCard(response)
      })
  }

  render() {
    console.log('in search.js, this.props', this.props);
    return (
      <div className="Search">
          <FormGroup
              controlId="formBasicText"
          >
              <ControlLabel>Search for anything within the Star Wars Universe</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                placeholder="Enter Text Here"
                onChange={this.handleInput}
                onKeyUp={this.handleSearch}
                value={this.state.userSearchInput}
              ></FormControl>
          </FormGroup>
      </div>
    );
  }
}

export default Search;
