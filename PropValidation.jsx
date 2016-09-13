import React from 'react';

class PropValidation extends React.Component {
    render() {
        var i = 100;
        const smStyle = {
            fontSize: "5em",
            color: "#FF0000"
        };
        const fromArr = this.props.propArray[0];
        return (
            <div>
                <h3>{fromArr}</h3>
                <h3>{this.props.propBool? "yay": "nay"}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
            </div>
        );
    }
}

PropValidation.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
};

PropValidation.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: (e) => "hold on " + e,
    propNumber: 88,
    propString: "stringy typey",
    propObject: {band: "elo"}
};

export default PropValidation;
