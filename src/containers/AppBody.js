import React, { useState } from 'react';

import PokeList from '../components/PokeList';
//import PageBtn from '../components/PageBtn';
import ShowMoreBtn from '../components/ShowMoreBtn';

const AppBody = () => {
    const [ listData, setList ] = useState([]);
    const [ fetchedList, setfetchedList ] = useState([]);
    
    const getListData = () => {
        const endpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${listData.length}&limit=20`;

        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            setfetchedList(data.results);
            console.log('PokeAPI List fetched');
        })
        .catch(err => console.log(err));

        //setIDNeccesary(true);
        
    };

    const addId = () => {
        let newListArray = [];
        let index = listData.length + 1;

        fetchedList.map(item => listData.push({...item, id: index++}));
        //listData.map(item => listData[index]({...item, id: index++}));

        newListArray.length > 0 && setList(newListArray);
        newListArray = [];
        setfetchedList([]);
        console.log(listData);
        //setIDNeccesary(false);
    };

    fetchedList.length > 0 && !fetchedList[0].id && addId();

    // Fetch initial Poke list
    listData.length === 0 && getListData();

    return (
        <div>
            <PokeList 
                listData={listData}
            />
            <ShowMoreBtn />
        </div>

    );
};

export default AppBody;