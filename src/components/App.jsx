import React, { Component } from 'react';

import AnimalList from './AnimalList';


class App extends Component {
    render() {
        return(
        <div className="container app-container">
            <h4>Hello to zookeper</h4>
            <AnimalList />
        </div>
        )
    }
}

export default App;
