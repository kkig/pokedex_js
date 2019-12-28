 import React, { useContext } from 'react';

import { useObserver } from 'mobx-react';
import StoreContext from '../stores/StoreContext';

// Components
import PokeList from '../components/PokeList';
import ShowMoreBtn from '../components/ShowMoreBtn';

// API for Pokemon list 
import { usePokeList } from '../API/usePokeList';

const AppBody = () => {
    const store = useContext(StoreContext);
    const { fetchedList, getListData } = usePokeList();

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