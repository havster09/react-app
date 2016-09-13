import React from 'react';

class App extends React.Component {
    render() {
        var i = 100;
        return (
            <div>
                <h1>{1+324}</h1>
                <h2>{i < 50?'less than 50':'more than 50'}</h2>
                <p data-myattribute="hassa">This is sparta</p>
            </div>
        );
    }
}

export default App;
