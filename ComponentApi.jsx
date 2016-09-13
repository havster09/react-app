import React from 'react';
import ReactDOM from 'react-dom';

class ComponentApi extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }
    setStateHandler() {
        var item = "sm item crap";
        var smArr = this.state.data;
        smArr.push(item);
        this.setState({data: smArr})
    }
    forceUpdateHandler() {
        this.forceUpdate();
    }
    findDomNodeHandler() {
        var myP = document.getElementById('opp');
        ReactDOM.findDOMNode(myP).style.color = 'green';
    }
    render() {
        const myStyle = {
            background: "pink"
        };
        return (
            <div style={myStyle}>
                <button onClick={this.setStateHandler}>Set State</button>
                <h4>{this.state.data}</h4>
                <button onClick={this.forceUpdateHandler}>Force Update</button>
                <p>{Math.round(Math.random() * 100)}</p>
                <button onClick={this.findDomNodeHandler}>Greenify</button>
                <p id="opp">Node</p>
            </div>
        );
    }
}

ComponentApi.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: (e) => "hold on " + e,
    propNumber: 88,
    propString: "stringy typey",
    propObject: {band: "elo"}
};

export default ComponentApi;
