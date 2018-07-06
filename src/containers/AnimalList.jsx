import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalList extends Component {

    renderAnimalsList() {
        let counter = 0;

        return this.props.animals.map((animal) => {
            console.log('renderAnimalsList', animal)
            counter = counter + 1;
            return(
                <li 
                    key={counter}
                    className="list-group-item">
                    <p>Name : {animal.name}</p>
                </li>
            )
        })
    }

    render() {

        // console.log('animalList',this);

        return(
            <ul className="list-group">
                {this.renderAnimalsList()}
            </ul>
        )
    }
}

function mapStateToProps(state){

    // console.log('mapStateToProps', state)
    return {
        animals : state.animals

    }
}

// export default AnimalList;
// Wrapped component -> Higher order component
export default connect(mapStateToProps)(AnimalList);


