 import React, { useContext } from 'react';

import { useObserver } from 'mobx-react';

import PokeList from '../components/PokeList';
//import PageBtn from '../components/PageBtn';
import ShowMoreBtn from '../components/ShowMoreBtn';
//import { usePokeList } from '../API/usePokeList';
import StoreContext from '../stores/StoreContext';
import { usePokeList } from '../API/usePokeList';

const AppBody = () => {
    const store = useContext(StoreContext);
    const { fetchedList, getListData } = usePokeList();

    //const [ isListRequested, setListRequested ] = useState(false);

    /*

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
            //console.log(data.results)
        })
        .catch(err => console.log(err));
        
    };

    const getListData = () => {
        //console.log(listData.length);
        console.log(`Poke Count: ${store.PokeCount}`)
        fetchListData();
    };

    store.PokeCount === 0 && fetchedList.length === 0 && getListData();

    store.PokeCount > 0 && console.log(store.pokeData); 

    useEffect(() => {

        // When API is called to get new list, add id to the array
        const addId = () => {
            let newListArray = [];
            let index = store.PokeCount + 1;
    
            fetchedList.map(item => newListArray.push({...item, id: index++}));
    
            newListArray.length > 0 && store.addNewList(newListArray);
            setFetchedList([]);
            
        };
        
        fetchedList.length > 0 && addId();

    }, [store, fetchedList]);

    */

    store.PokeCount === 0 && fetchedList.length === 0 && getListData();
    store.PokeCount > 0 && fetchedList.length === 0 && console.log(store.pokeData); 

    return useObserver(() => (
        <div>
            <PokeList 
                listData={store.pokeData}
            />
            <ShowMoreBtn handleClick={() => getListData()}/>
        </div>

    ));
};

export default AppBody;