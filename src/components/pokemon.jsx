import React, { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon = (props) => {
    const [names, setNames] = useState([]);
    const showPokemon = (e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
        setNames(response.data.results);
        })
        .catch(error => console.log(error))
    };
    return (
        <div>
            <button onClick={showPokemon}>Fetch All Pokemon</button>
            {names.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <li>{pokemon.name}</li>
                    </div>
                );
            })}
        </div>
    );
};

export default Pokemon;