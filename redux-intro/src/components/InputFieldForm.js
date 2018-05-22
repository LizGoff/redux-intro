import React, { Component } from 'react';
//if we wish to just send information then we just connect
import { connect } from 'react-redux';
import InputFieldList from './InputFieldList.js'





class InputFieldForm extends Component {
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

}// input field end


// inputButton start and send data to reducer
handleElementChangeButton = () => {
    //this.state.newState will be the users input in the input field
    const action = { type: 'CHANGE_BUTTON', someProp: 'Info in', payload: this.state.newState };
    this.props.dispatch(action)

    this.setState({
        newState: '',
    });

} // inputButton stop


    render() {
        return(
            <div>
                <h3>Input Field</h3>
                <input onChange={this.handleElementChange} value={this.state.newState} />
                <button onClick={this.handleElementChangeButton}>Enter Input</button>
            </div>
        )
    }

}   

export default connect()(InputFieldForm);