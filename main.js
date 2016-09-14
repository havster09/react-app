import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import PropValidation from './PropValidation.jsx';
import ComponentApi from './ComponentApi.jsx';
import Lifecycle from './Lifecycle.jsx';
import Forms from './Forms.jsx';
import Events from './Events.jsx';
import Refs from './Refs.jsx';
import Keys from './Keys.jsx';
import Test from './Test.jsx';
import App from './App.jsx';

import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />

    </Route>
</Router>, document.getElementById('container'));





ReactDOM.render(<Keys greet={"hello chabuddy g"} />, document.getElementById('keys'));
ReactDOM.render(<Refs greet={"hello chabuddy g"} />, document.getElementById('refs'));
ReactDOM.render(<Events greet={"hello chabuddy g"} />, document.getElementById('events'));
ReactDOM.render(<Forms greet={"hello chabuddy g"} />, document.getElementById('forms'));
ReactDOM.render(<Lifecycle greet={"hello chabuddy g"} />, document.getElementById('lifecycle'));

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('lifecycle'));}, 1000);

ReactDOM.render(<ComponentApi greet={"hello chabuddy g"} />, document.getElementById('component-api'));
ReactDOM.render(<Test smPropOne="from prop one" smPropTwo="from prop two" dataTest="yaaay"/>, document.getElementById('app'));
ReactDOM.render(<PropValidation smPropOne="from prop one" smPropTwo="from prop two" dataTest="yaaay"/>, document.getElementById('prop-validation'));




