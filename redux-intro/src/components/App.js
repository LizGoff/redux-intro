import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// allows you to connect with Redux and dispatch actions
// stuff that connects and receives


// don't forget to npm install redux and react-redux --save
// it doesn't replace complete state it works with it.
import { connect } from 'react-redux';



// the handleClick activates the reducer
class App extends Component {

  handleClickOne = () => {
    const action = { type: 'BUTTON_ONE', someProp: 'hello'};
    this.props.dispatch(action)
  }

  handleClickTwo = () => {
    const action = { type: 'BUTTON_TWO', someProp: 'world'};
    this.props.dispatch(action)
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.handleClickOne}>BUTTON One</button>
        <button onClick={this.handleClickTwo}>BUTTON Two</button>
      </div>
    );
  }
}

// can also be written this way
// <div className='App'>
// <button onClick{() => {this.props.dispatch({ type: 'BUTTON_ONE'})}>BUTTON One</button>
// <div className='App'><button onClick{() => {this.props.dispatch({ type: 'BUTTON_TWO'})}>BUTTON Two</button>


// this type of structure is called currying
export default connect()(App);
