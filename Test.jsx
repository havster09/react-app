import React from 'react';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },

                {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                },

                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
            ],
            smArr: ["bueno", "vamos", "a", "bailar", "esta", "noche", "hasta la manana"],
            header: `Header from state baby`,
            "content": `Content from state partna`,
            chico: `back of chics asses`,
            tony: `make a move`,
            frankLine: "break his back for you",
            ernieLine: "thanks tony"
        }
    }
    render() {
        var i = 100;
        const smStyle = {
            fontSize: "5em",
            color: "#FF0000"
        };
        return (
            <div>
                <h1>{this.props.smDefaultPropOne}</h1>
                <h1>{this.props.smDefaultPropTwo}</h1>
                <h1>{this.props.smPropOne}</h1>
                <h1>{this.props.smPropTwo}</h1>
                <h1>{this.props.dataTest}</h1>
                <h1>{this.state.header}</h1>
                <h1>{this.state.content}</h1>
                <h1>{this.state.chico}</h1>
                <h1>{this.state.tony}</h1>
                <h1>{this.state.smArr.join(" ")}</h1>
                <Header headerProp = {this.state.frankLine}></Header>
                <Content contentProp = {this.state.ernieLine}></Content>

                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person}/>)}
                    </tbody>
                </table>

                <h1 style={smStyle}>{1 + 324}</h1>
                {/*wadup baby*/}
                <h2>{i < 50 ? 'less than 50' : 'more than 50'}</h2>
                <p data-myattribute="hassa">This is sparta</p>
            </div>
        );
    }
}

Test.defaultProps = {
  smDefaultPropOne: 123*2,
  smDefaultPropTwo: "sdsdsdsd",
};

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.contentProp}</h2>
            </div>
        )
    }
}

export default Test;
