import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Init data'
        };

        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>Forms son</h1>
                <input type="text" value={this.state.data} onChange={this.updateState}/>
                <h2>{this.state.data}</h2>
                <Content myDataProp = {this.state.data}
                         updateStateProp = {this.updateState}></Content>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>adv</h2>
                <input type="text"
                       value = {this.props.myDataProp}
                       onChange={this.props.updateStateProp}
                       {{/*updating from child*/}}
                />
                <h3>{this.props.myDataProp}</h3>
            </div>
        )
    }
}

export default Forms;
