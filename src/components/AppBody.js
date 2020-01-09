 import React, { useState, useEffect, useContext } from 'react';

import StoreContext from '../stores/StoreContext';

// Components
import PokeList from './AppBody/PokeList';
import ShowMoreBtn from './AppBody/ShowMoreBtn/ShowMoreBtn';

const AppBody = () => {

    const [ fetchedList, setFetchedList ] = useState([]);
    const [ endpoint, setEndpoint ] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20');
    const store = useContext(StoreContext);

    // API call for pokemon list
    const fetchListData = () => {

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                if(data.results.length > 0) {

                    // Success
                    setFetchedList(data.results);   // Pokemon list data
                    setEndpoint(data.next); // For 'show more' btn

                } else {
                    // No result returned
                    console.log('PokeAPI List not available');
                }

            })
            .catch(err => console.log(err));
        
    };

    const getListData = () => {
        endpoint !== null && fetchListData();
    };

    useEffect(() => {

        // When API is called to get new list, add id to the array
        const addId = () => {
            let newListArray = [];
            let index = store.PokeCount + 1;
    
            fetchedList.map(item => newListArray.push({...item, id: index++, detail: []}));
    
            newListArray.length > 0 && store.addNewList(newListArray);
            setFetchedList([]); 
        };
        
        fetchedList.length > 0 && addId();

    }, [store, fetchedList]);

    // Get Initial List 
    store.PokeCount === 0 && fetchedList.length === 0 && getListData();

    return (
        <div>

            <PokeList 
                listData={store.pokeData}
            />

            <ShowMoreBtn 
                endpoint={endpoint}
                handleClick={() => getListData()}
            />  

        </div>

    );
};

export default AppBody;