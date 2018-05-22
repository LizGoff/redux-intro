import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// allows you to connect with Redux and dispatch actions
// stuff that connects and receives


// don't forget to npm install redux and react-redux --save
// it doesn't replace complete state it works with it.
import { connect } from 'react-redux';



// the handleClick activates the reducer
class App extends Component {
  constructor(props) {
    super(props);

    // local state keeps track of the changes
    this.state = {
      newState: ''
    }
  };

  // input field start
  handleElementChange = (event) => {
    this.setState({
      newState:
        event.target.value,
    });
    console.log(this.state.newState);
    // const action = { type: 'CHANGE_BUTTON', someProp: 'Info in' };
    // this.props.dispatch(action)

  } // input field end


  // inputButton start
  handleElementChangeButton = () => {
    const action = { type: 'CHANGE_BUTTON', someProp: 'Info in', inputButton: this.state.newState };
    this.props.dispatch(action)
    this.setState({
      newState: '',
    });

  } // inputButton stop


  handleClickOne = () => {
    const action = { type: 'BUTTON_ONE', someProp: 'Hello' };
    this.props.dispatch(action)
  }

  handleClickTwo = () => {
    const action = { type: 'BUTTON_TWO', someProp: 'World' };
    this.props.dispatch(action)
  }

  handleClickMinus = () => {
    const action = { type: 'MINUS', someProp: 'Who ate all the cookies!' };
    this.props.dispatch(action)
  }



  render() {
    return (
      <div className="App">
        <button onClick={this.handleClickOne}>BUTTON One</button>
        <button onClick={this.handleClickTwo}>BUTTON Two</button>
        <button onClick={this.handleClickMinus}>MINUS</button>
        <input onChange={this.handleElementChange} value={this.state.newState} />
        <button onClick={this.handleElementChangeButton}>CHANGE_BUTTON</button>
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
