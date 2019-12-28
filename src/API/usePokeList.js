import { useState, useContext } from 'react';
import StoreContext from '../stores/StoreContext';

export const usePokeList = listLength => {
    const [ newListData, setNewList ] = useState([]);
    const [ fetchedList, setFetchedList ] = useState([]);
    const [ isListFetching, setListFetching ] = useState(true);

    const fetchListData = () => {
        //setNewList([]);

        const itemQuantity = listLength > 0 ? `offset=${listLength}&` : ``;
        const endpoint = `https://pokeapi.co/api/v2/pokemon/?${itemQuantity}limit=20`;

        console.log(endpoint);

        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            setFetchedList(data.results);
            console.log('PokeAPI List fetched');
            //console.log(data.results)
        })
        .catch(err => console.log(err));
        
    };

    const addId = () => {
        let newListArray = [];
        let index = parseFloat(listLength) + 1;

        fetchedList.map(item => newListData.push({...item, id: index++}));

        const assignValue = () => {
            console.log(newListArray);
            setNewList(newListArray);
        };
        //newListArray = [...listData, ...newListArray];

        //setNewList(...newListData, newListArray);
        //newListArray = [];
        //setFetchedList([]);
        setNewList(newListArray);
        setListFetching(false);

        newListArray.length > 0 && assignValue();
    };

    const getListData = () => {
        //console.log(listData.length);
        fetchListData();
        fetchedList.length > 0 && addId();
    };

    isListFetching && getListData();
    //getListData();

    // Fetch initial Poke list
    //listLength === 0 && getListData();

    //fetchedList.length > 0 && console.log(fetchedList);

    useState(() => {
        newListData.length > 0 && console.log(newListData)
    }, [newListData])
    
    return { fetchedList };
};
