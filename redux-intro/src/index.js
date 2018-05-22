import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// the store communicates and passes action information
// middleware calls out before the reducer
//compose
import { createStore, combineReducers, applyMiddleware, } from 'redux';
// Provider makes the connection between redux and app
import { Provider } from 'react-redux';
// redux logs out useful info about redux so we don't have to
import logger from 'redux-logger';


// redux isn't necessary for every application. for a group project it is enough code to spend the effort to do this up front.


// the action is what we dispatched from app.js or whatever component you'd like
const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE') {
        console.log('firstReducer', action);
        return state + 1;
    } else {
        (action.type === 'MINUS')
        return state - 1;
    }
    // use this to test code first
    // return {}; //return next state
    return state;
}

// box of oreo reducer

const secondReducer = (state = [], action) => {  // setting state to an empty array to start
    if (action.type === 'BUTTON_TWO') {
        console.log('secondReducer', action);
        return [...state, 'oreo']; // add oreo to the state
    }  else if (action.type === 'EAT_ALL') {
      state = [];
    }
    return state;
}

const thirdReducer = (state = [], action) => {  // setting state to an empty array to start
    if (action.type === 'CHANGE_BUTTON') {
        console.log('thirdReducer', action);
        return [...state, action.payload];
    }
    // as long as we click on this button it works, but if we click on another button it 
    // fires off all buttons reducers and clears the feilds
    return [];
}





// createStore takes in a function which is just a reducer
// a reducer is a function that runs whenever and action is dispatched
// all an action is, is an object. It describes what happened.
// the instance is a function that takes in a function
// store can only take in one reducer
const storeInstance = createStore(
    // combines the reducer and creates extra validation of state
    combineReducers({
        // key and value
        // firstReducer: firstReducer,

        // this is a shortcut to get the same thing
        firstReducer,
        secondReducer,
        thirdReducer

    }),
    // this attaches the logs to the console log so that you can see its state and info.
    applyMiddleware(logger),
);

// Use this to first in the above to make sure it is connected

// () => {
//     console.log('A store is a reducer!')
// },


// components start with Capital letters
// variable are camel case as in lower case 
// constants can be screaming snake case like PORT

// wrap the entire App in the Provider
// passing the store into the provider gives acess to the provider to the store. 


// shouldn't the firstReducer be in here too?
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
