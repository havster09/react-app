import React from 'react';
import ReactDOM from 'react-dom';

class Keys extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                component: 'First...',
                id: 1
            },

                {
                    component: 'Second...',
                    id: 2
                },

                {
                    component: 'Third...',
                    id: 3
                }]
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
                <h1>Keys son</h1>
                <input type="text" value = {this.state.data} onChange = {this.updateState} ref="myInput"/>
                <button onClick = {this.clearInput}>Clear patna</button>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{}</li>
                </ul>
            </div>
        )
    }
}

export default Keys;
