import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
// Provider makes the connection between redux and app
import { Provider } from 'react-redux';


// createStore takes in a function which is just a reducer
// a reducer is a function that runs whenever and action is dispatched
// all an action is, is an object. It describes what happened.
const storeInstance = createStore(
    () => {
        console.log('I am a reducer!')
    },
)

// components start with Capital letters
// variable are camel case as in lower case 
// constants can be screaming snake case like PORT

 
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
