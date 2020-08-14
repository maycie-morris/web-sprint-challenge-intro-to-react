// Write your Character component here

import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard'


function Character() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6")
        .then((response) => {
            console.log(response)
            setData(response.data)
        })
    }, []);

    


    return (
        <div>
         {data.map((item) => {
             return <CharacterCard
                key={item.id}
                img={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
                origin={item.origin.name}
            />
        })}
        </div>
    )

}


export default Character;