import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };

        this.updateState = this.updateState.bind(this);
        this.updateStateChild = this.updateStateChild.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    updateState(e) {
        this.setState({data: e.target.value});
    }
    clearInput() {
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    updateStateChild(e) {
        this.setState({data: 'data updated from child!!!'});
    }
    render() {
        return (
            <div>
                <h1>Refs son</h1>
                <input type="text" value = {this.state.data} onChange = {this.updateState} ref="myInput"/>
                <button onClick = {this.clearInput}>Clear patna</button>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default Refs;
