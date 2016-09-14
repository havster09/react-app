import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Init data',
            lj: 'grandmama'
        };

        this.updateState = this.updateState.bind(this);
        this.updateStateChild = this.updateStateChild.bind(this);
    }
    updateState(e) {
        this.setState({data: 'data updated from parent!!!'});
    }
    updateStateChild(e) {
        this.setState({data: 'data updated from child!!!'});
    }
    render() {
        return (
            <div>
                <h1>Events son</h1>
                <button onClick = {this.updateState}>Update patna</button>
                <ChildContent updateStateProp = {this.updateStateChild} smDataProp = {`hardcoded stuff ${this.state.lj}`}></ChildContent>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

class ChildContent extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateStateProp}>Click from child</button>
                <p>{this.props.smDataProp}</p>
            </div>
        )
    }
}

export default Events;
