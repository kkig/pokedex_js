import { useState, useContext, useEffect } from 'react';
import StoreContext from '../stores/StoreContext';

export const usePokeList = listLength => {
    const [ fetchedList, setFetchedList ] = useState([]);
    const store = useContext(StoreContext);
    
    // API call for pokemon list
    const fetchListData = () => {

        const itemQuantity = store.PokeCount > 0 ? `offset=${store.PokeCount}&` : ``;
        const endpoint = `https://pokeapi.co/api/v2/pokemon/?${itemQuantity}limit=20`;

        console.log(endpoint);

        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            setFetchedList(data.results);
            console.log('PokeAPI List fetched');
        })
        .catch(err => console.log(err));
        
    };

    const getListData = () => {
        fetchListData();
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
    
    return { fetchedList, getListData };
};