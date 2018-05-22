import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// allows you to connect with Redux and dispatch actions
// stuff that connects and receives


// don't forget to npm install redux and react-redux --save
// it doesn't replace complete state it works with it.
import { connect } from 'react-redux';
import InputFieldForm from '../components/InputFieldForm'
import InputFieldList from '../components/InputFieldList'


// the handleClick activates the reducer
class App extends Component {

//// ALL MOVED TO INPUT LIST AND FORM

  // constructor(props) {
  //   super(props);

  //   // local state keeps track of the changes
  //   this.state = {
  //     newState: ''
  //   }
  // };

  // // input field start
  // handleElementChange = (event) => {
  //   this.setState({
  //     newState:
  //       event.target.value,
  //   });
  //   console.log(this.state.newState);
  //   // const action = { type: 'CHANGE_BUTTON', someProp: 'Info in' };
  //   // this.props.dispatch(action)

  // } // input field end


  // // inputButton start and send data to reducer
  // handleElementChangeButton = () => {
  //   //this.state.newState will be the users input in the input field
  //   const action = { type: 'CHANGE_BUTTON', someProp: 'Info in', payload: this.state.newState };
  //   this.props.dispatch(action)

  //   this.setState({
  //     newState: '',
  //   });

  // } // inputButton stop

  // buttonOne start
  handleClickOne = () => {
    const action = { type: 'BUTTON_ONE', someProp: 'Hello' };
    this.props.dispatch(action)
  } // buttonOne end


  // buttonTwo start
  handleClickTwo = () => {
    const action = { type: 'BUTTON_TWO', someProp: 'World' };
    this.props.dispatch(action)
  } // buttonTwo end

  // minusButton start
  handleClickMinus = () => {
    const action = { type: 'MINUS', someProp: 'eat cookies!' };
    this.props.dispatch(action)
  }  // minusButton end

  // minusButton start
  handleClickEatAll = () => {
    const action = { type: 'EAT_ALL', someProp: 'Who ate all the cookies!' };
    this.props.dispatch(action)
  }  // minusButton end


  render() {
    return (
      <div className="App">
        <h3>Stepper</h3>
        <button onClick={this.handleClickOne}>PLUS</button>
        <button onClick={this.handleClickMinus}>MINUS</button>

        <h3>Oreo Counter</h3>
        <button onClick={this.handleClickTwo}>Add Oreo</button>
        <button onClick={this.handleClickEatAll}>Eat All Oreos!</button>

        {/* //// ALL MOVED TO INPUT LIST AND FORM */}

        {/* <h3>Input Field</h3>
        <input onChange={this.handleElementChange} value={this.state.newState} />
        <button onClick={this.handleElementChangeButton}>Enter Input</button> */}
        
        <InputFieldForm />
        <InputFieldList />
      </div>
    );
  }
}




// can also be written this way
// <div className='App'>
// <button onClick{() => {this.props.dispatch({ type: 'BUTTON_ONE'})}>BUTTON One</button>
// <div className='App'><button onClick{() => {this.props.dispatch({ type: 'BUTTON_TWO'})}>BUTTON Two</button>
{/* <button onClick=(() => this.props.dispatch({ type: 'EAT_ALL', someProp: 'Who ate all the cookies!' })) />Eat All Oreos!</button> */}


// this type of structure is called currying
export default connect()(App);
