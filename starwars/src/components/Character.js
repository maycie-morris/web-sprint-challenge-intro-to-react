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
}

