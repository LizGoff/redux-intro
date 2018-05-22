import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputFieldForm from './InputFieldForm.js'



// if we want information sent back we have to mapRedux
const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class InputFieldList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // map the input to specific items
        return (
            <div>
                <h4>list of Input Field</h4>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
                <ul>
{/* // input is thirdReducer[i], i is the index e.g 1,2,3 */}
                    {this.props.reduxState.thirdReducer.map((input, i) =>
                        <li key={i}>
                            {input}</li>)}

                </ul>
            </div>

        )
    }
}


export default connect(mapReduxStateToProps)(InputFieldList);