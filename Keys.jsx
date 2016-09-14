import React from 'react';
import ReactDOM from 'react-dom';

class Keys extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {component: 'First...', id: 1},
                {component: 'Second...', id: 2},
                {component: 'Third...', id: 3},
                {component: 'rapapa', id: 3}
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Keys son</h1>
                {
                    this.state.data.map(
                        (dynamicComponent, i) => <Content key={i} componentData={dynamicComponent}/>
                    )
                }
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.componentData.component}</li>
                    <li>{this.props.componentData.id}</li>
                </ul>
            </div>
        )
    }
}

export default Keys;
