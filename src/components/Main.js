import React, { Component} from 'react';
import api from '../utils/api/api.js';

import Search from './Search.js';
import Cardholder from './Cardholder.js'

import '../styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearchInput: '',
      userRequestedData: [],
      planetsObject: [],
      currentPageNumber: 1
    }
    this.sendResponseToCard = this.sendResponseToCard.bind(this);
    this.planetSearch = this.planetSearch.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.sendUserSearchInputToMain = this.sendUserSearchInputToMain.bind(this);
  }

  componentWillMount() {
    this.planetSearch();
  }
  planetSearch() {
    api.getAllPlanetsObject()
      .then( response => {
        this.setState({ planetsObject: response.data})
      })
  }
  sendResponseToCard(userRequestedData) {
    this.setState({ userRequestedData: userRequestedData})
  }

  updatePage(newPageNumber) {
    this.setState({currentPageNumber: newPageNumber})
    this.handlePageChange(this.state.userSearchInput, newPageNumber)
  }
  sendUserSearchInputToMain(userSearchInput) {
    this.setState({ userSearchInput: userSearchInput})
  }
  handlePageChange(userSearchInput, currentPageNumber) {
    api.userSearch(userSearchInput, currentPageNumber)
      .then( response => {
        console.log('response in handlePageChange, api.userSearch in main.js', response)
        this.sendResponseToCard(response)
      })
  }



  render() {
    console.log('this.state in main', this.state);
    return (
      <div className="Main">
        <Search sendResponseToCard={this.sendResponseToCard} pageNumber={this.state.currentPageNumber} handlePageChange={this.handlePageChange} sendUserSearchInputToMain={this.sendUserSearchInputToMain}/>
        <Cardholder userRequestedData={this.state.userRequestedData} planetsObject={this.state.planetsObject} updatePage={this.updatePage} currentPageNumber={this.state.currentPageNumber}/>
      </div>
    )
  }
}

export default Main;
