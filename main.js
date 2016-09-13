import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import PropValidation from './PropValidation.jsx';
import ComponentApi from './ComponentApi.jsx';

ReactDOM.render(<ComponentApi greet={"hello chabuddy g"} />, document.getElementById('component-api'));
ReactDOM.render(<App smPropOne="from prop one" smPropTwo="from prop two" dataTest="yaaay"/>, document.getElementById('app'));
ReactDOM.render(<PropValidation smPropOne="from prop one" smPropTwo="from prop two" dataTest="yaaay"/>, document.getElementById('prop-validation'));
