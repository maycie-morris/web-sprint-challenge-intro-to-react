// Write your Character component here

import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard'


function Character() {

    const [character, setCharacter] = useState([]);


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
            setCharacter(response.data)
        });
    }, []);


    return (
        <div>
            <ul>
                {character.map((item) => {
                    return (
                        <CharacterCard
                            id={item.id}
                            img={item.image}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            gender={item.gender}
                            origin={item.origin.name}
                        />
                    )
                })}
            </ul>
        </div>
    )

}


export default Character;