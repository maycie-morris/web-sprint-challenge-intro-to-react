import React from 'react';
import styled from 'styled-components'

const Header = styled.h2`
    font-size: 2.5rem;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-weight: bold;
    `

const Image = styled.img`
    border-radius: 50%;
    border: 3px solid black;
    box-shadow: 0 10px 50px rgba(10, 42, 219, 1);`

const Paragraphs = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000000;
    font-size: 1rem;`

const CharacterCard = props => {
    return (
        <div className="character-container">
            <Image src={props.img} />
        <div className="character-info">
            <Header>{props.name}</Header>
            <Paragraphs>Status: {props.status} </Paragraphs>
            <Paragraphs>Species: {props.species} </Paragraphs>
            <Paragraphs>Gender: {props.gender} </Paragraphs>
            <Paragraphs>Origin: {props.origin} </Paragraphs>
        </div>
        </div>
    )
}

export default CharacterCard;