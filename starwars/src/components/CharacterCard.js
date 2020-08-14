import React from 'react';


const CharacterCard = props => {
    return (
        <div>
            <img src={props.img} />
            <h2>Name: {props.name}</h2>
            <p>Status: {props.status} </p>
            <p>Species: {props.species} </p>
            <p>Gender: {props.gender} </p>
            <p>Origin: {props.origin} </p>
        </div>
    )
}

export default CharacterCard;