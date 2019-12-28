import React, { useContext } from 'react';

import { useObserver } from 'mobx-react';

import PokeList from '../components/PokeList';
//import PageBtn from '../components/PageBtn';
import ShowMoreBtn from '../components/ShowMoreBtn';
import { usePokeList } from '../API/usePokeList';
import StoreContext from '../stores/StoreContext';

const AppBody = () => {
    //const [ listData, setList ] = useState([]);
    //const [ fetchedList, setFetchedList ] = useState([]);
    const store = useContext(StoreContext);

    //const { fetchedList } = usePokeList(0);

    //store && console.log(`MobX count: ${store.PokeCount}`);



    //listData.length > 0 && store.addNewList(listData);
    //listData.length > 0 && console.log(store.pokeData);
    
    /*
    const fetchListData = () => {
        const itemQuantity = listData.length > 0 ? `offset=${listData.length}&` : ``;
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
        let index = listData.length + 1;

        fetchedList.map(item => newListArray.push({...item, id: index++}));
        console.log(fetchedList);
        newListArray = [...listData, ...newListArray];
        console.log(newListArray)
        //listData.map(item => listData[index]({...item, id: index++}));

        newListArray.length > 0 && setList(newListArray);
        newListArray = [];
        setFetchedList([]);
        
        //listData.length > 0 && console.log(listData);
        //setIDNeccesary(false);
    };

    const getListData = () => {
        console.log(listData.length);
        fetchListData();
        fetchedList.length > 0 && addId();
    };

    // Fetch initial Poke list
    listData.length === 0 && getListData();
    */

    return useObserver(() => (
        <div>
            <PokeList 
                listData={store.pokeData}
            />
            <ShowMoreBtn handleClick={() => console.log(store.isListRequested)}/>
        </div>

    ));
};

export default AppBody;