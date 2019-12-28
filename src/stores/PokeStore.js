import React from 'react';

import { useLocalStore } from 'mobx-react';

import StoreContext from './StoreContext';

const StoreProvider = ({children}) => {
    //const [ fetchedList, setFetchedList ] = useState([]);

    const store = useLocalStore(() => ({
        pokeData: [],
        addNewList: newList => {
            store.pokeData = [...store.pokeData, ...newList];
        },
        get PokeCount() {
            return store.pokeData.length;
        },
        isListRequested: true,
        toggleListRequest() {
            console.log(store.isListRequested);
            store.isListRequested = !store.isListRequested;
        }

    }));

    /*
    
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

    const addId = () => {
        let newListArray = [];
        let index = store.PokeCount + 1;

        fetchedList.map(item => newListArray.push({...item, id: index++}));

        newListArray.length > 0 && store.addNewList(newListArray);
        store.toggleListRequest();
        setFetchedList([]);
        //newListArray = [];
    };

    fetchedList.length > 0 && addId();

    // Fetch initial Poke list
    //store.PokeCount === 0 && fetchListData();

    store.PokeCount > 0 && console.log(store.pokeData);

    useEffect(() => {
        console.log(store.isListRequested)
    }, [store.isListRequested])

    !store.isListRequested && console.log('Hello!')

    */


    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;