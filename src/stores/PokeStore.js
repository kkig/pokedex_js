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
        addDetail(id, detailArray) {
            store.pokeData[id - 1].detail = detailArray;
            console.log(store.pokeData[id - 1]);
        }
    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;