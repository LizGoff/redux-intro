import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// allows you to connect with Redux and dispatch actions
// stuff that connects and receives
import { connect } from 'react-redux';



// the handleClick activates the reducer
class App extends Component {
  handleClick = () => {
    this.props.dispatch(
      { type: 'BUTTON_ONE'}
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>BUTTON 1</button>
      </div>
    );
  }
}


// this type of structure is called currying
export default connect()(App);
