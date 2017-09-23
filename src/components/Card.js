import React, { Component } from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

import api from '../utils/api/api.js';

import '../styles/Card.css';

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      editNameTextInputHidden: 'hidden',
      newNameValue: '',
      editHomeworldTextInputHidden: 'hidden',
      newHomeworldValue: ''
    }
    this.hideEditName=this.hideEditName.bind(this);
    this.hideEditHomeworld= this.hideEditHomeworld.bind(this);
    this.editName = this.editName.bind(this);
    this.handleEditNameInput = this.handleEditNameInput.bind(this);
  }

  hideEditName() {
    if(this.state.editNameTextInputHidden === 'hidden') {
      this.setState({editNameTextInputHidden: 'text'})
    }
    else if(this.state.editNameTextInputHidden === 'text') {
      this.setState({editNameTextInputHidden: 'hidden'})
    }
  }
  editName(e) {
    e.preventDefault();
    this.setState({ newNameValue: e.target.value });
  }
  handleEditNameInput(e) {
    e.preventDefault();
    if(e.keyCode === 13) {
      var personObjectUpdatedName = this.props.cardData;
      personObjectUpdatedName.name = this.state.newNameValue
      console.log('personObjectUpdatedName', personObjectUpdatedName);
      api.editName(personObjectUpdatedName)
        .then(response => {
          console.log('response in handleEditNameInput in Card', response);
        })
        this.setState({newNameValue: ''});
    }
  }

  hideEditHomeworld() {
    if(this.state.editHomeworldTextInputHidden === 'hidden') {
      this.setState({editHomeworldTextInputHidden: 'text'})
    }
    else if(this.state.editHomeworldTextInputHidden === 'text') {
      this.setState({editHomeworldTextInputHidden: 'hidden'})
    }

  }
  render() {
    console.log('this.props.cardData', this.props.cardData);
    return (
      <div className="Card">
        <p  className="inline-block">Name: {this.props.cardData.name}</p><span className='edit'><img onClick={this.hideEditName} className='edit' src={require('../media/editSymbol.png')} alt={'edit symbol'}/></span>
        <FormGroup>
          <FormControl
            type={this.state.editNameTextInputHidden}
            value={this.state.newNameValue}
            onChange={this.editName}
            placeholder="edit name here"
            onKeyUp={this.handleEditNameInput}
            >
          </FormControl>
        </FormGroup>
        <p className="inline-block">Homeworld: {this.props.planet.name}</p><span className='edit'><img onClick={this.hideEditHomeworld} className='edit' src={require('../media/editSymbol.png')} alt={'edit symbol'}/></span>
        <input type={this.state.editHomeworldTextInputHidden}/>
    </div>
    );
  }
}

export default Card;
