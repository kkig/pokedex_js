import { useState } from 'react';

export const useList = () => {
    const [ listData, setList ] = useState({});
    
    const getListData = () => {
        const endpoint = `https://pokeapi.co/api/v2/pokemon/`;

        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            setList(data)
            console.log(data)
        })
        .catch(console.log('Error fetching Poke list API'));
    };

    getListData();
    console.log('Hello');
    
    return { listData };
};
