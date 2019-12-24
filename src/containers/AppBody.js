import React, { useState, useEffect } from 'react';

import PokeList from '../components/PokeList';
//import PageBtn from '../components/PageBtn';
import ShowMoreBtn from '../components/ShowMoreBtn';

const AppBody = () => {
    const [ listData, setList ] = useState([]);
    
    const getListData = () => {
        const endpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${listData.length}&limit=20`;

        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            setList(data.results)
            console.log('PokeAPI List fetched')
        })
        .catch(err => console.log(err));
        
    };

    const addId = () => {
        let newListArray = [];
        let index = listData.length + 1;

        listData.map(item => newListArray.push({...item, id: index++}));

        console.log(newListArray);
        newListArray = [];
    };

    listData.length > 0 && !listData.id && addId();

    //listData.length > 0 && console.log(listData);

    //listData.length > 0 && listData[0].id && console.log(listData);

    useEffect(() => {
        getListData();
    }, [])

    return (
        <div>
            <PokeList 
                listData={listData.length > 0 && listData[0].id ? listData : null}
            />
            <ShowMoreBtn />
        </div>

    );
};

export default AppBody;