import React from 'react';


const CharacterCard = props => {
    return (
        <li className="character-card" key={props.id}>
            <img src= {props.image} />
            <h2>Name: {props.name}</h2>
            <p>Status: {props.status} </p>
            <p>Species: {props.species} </p>
            <p>Gender: {props.gender} </p>
            <p>Origin: {props.origin.name} </p>
        </li>
    )
}

export default CharacterCard;