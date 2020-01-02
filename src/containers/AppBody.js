 import React, { useContext } from 'react';

import StoreContext from '../stores/StoreContext';

// Components
import PokeList from '../components/PokeList/PokeList';
import ShowMoreBtn from '../components/ShowMoreBtn';

// API for Pokemon list 
import { usePokeList } from '../API/usePokeList';

const AppBody = () => {
    const store = useContext(StoreContext);
    const { fetchedList, getListData } = usePokeList();

    store.PokeCount === 0 && fetchedList.length === 0 && getListData();

    return (
        <div>
            <PokeList 
                listData={store.pokeData}
            />
            <ShowMoreBtn handleClick={() => getListData()}/>
        </div>

    );
};

export default AppBody;