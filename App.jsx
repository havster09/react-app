import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexLink  } from 'react-router';

const App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Routing Example SPA</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default App;