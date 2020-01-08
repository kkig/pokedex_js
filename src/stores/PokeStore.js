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
        addDetail(name, detailArray) {
            store.pokeData.filter(pokemon => pokemon.name === name)[0].detail = detailArray;
            console.log(detailArray);
        },
        addEvolChain(newChain) {
            store.evolChain.push(newChain);
        }
    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;