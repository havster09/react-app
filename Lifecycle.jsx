import React from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        };

        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber() {
        this.setState({data: this.state.data+1});
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>add one</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        )
    }
}

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            myOtherNumber:0
        };
    }

    // hooks
    componentWillMount() {
        console.log('component mount start');
    }
    componentDidMount() {
        console.log('component mount end');
        this.state.myOtherNumber += 10;
        this.forceUpdate();
    }
    componentWillReceiveProps(newProps) {
        console.log('component prop '+this.props.myNumber);
    }
    shouldComponentUpdate(newProps, newState) {
        console.info(newProps, newState);
        return true;
    }
    componentWillUpdate(newProps, newState) {
        console.log('will update');
        console.info(newProps, newState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
    }
    componentWillUnmount() {
        console.log('component un mount');
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
                <h3>{this.state.myOtherNumber}</h3>
            </div>
        )
    }
}



export default Lifecycle;
