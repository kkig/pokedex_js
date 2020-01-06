import React from 'react';

import { useLocalStore } from 'mobx-react';

import StoreContext from './StoreContext';

const StoreProvider = ({children}) => {

    const store = useLocalStore(() => ({
        pokeData: [],
        evolChain: [],
        addNewList: newList => {
            store.pokeData = [...store.pokeData, ...newList];
        },
        get PokeCount() {
            return store.pokeData.length;
        },
        addDetail(id, detailArray) {
            store.pokeData[id - 1].detail = detailArray;
            console.log(detailArray);
            console.log('Detail updated');
        },
        addEvolChain(newChain) {
            store.evolChain.push(newChain);
            console.log('Chain pushed');
        }
    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;