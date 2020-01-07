import { useState, useContext, useEffect } from 'react';
import StoreContext from '../stores/StoreContext';

export const usePokeList = () => {
    const [ fetchedList, setFetchedList ] = useState([]);
    const [ endpoint, setEndpoint ] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20');
    const [ moreListToShow, setMoreList ] = useState(true);
    const store = useContext(StoreContext);

    useEffect(() => {
        endpoint === null && setMoreList(false);
    }, [endpoint]);

    // API call for pokemon list
    const fetchListData = () => {

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                if(data.results.length > 0) {
                    // Success
                    setFetchedList(data.results);
                    setEndpoint(data.next);
                    console.log('PokeAPI List fetched');
                } else {
                    // No result returned
                    console.log('PokeAPI List fetch not successful');
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
    
    return { fetchedList, getListData, moreListToShow };
};