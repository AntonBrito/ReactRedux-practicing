import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalList extends Component {

    render() {

        // console.log('animalList',this);

        return(
            <div>hello from animalList</div>
        )
    }
}

function mapStateToProps(state){
    return {
        name : 'bluebeard'

    }
}

export default AnimalList;


