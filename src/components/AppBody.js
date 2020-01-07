 import React, { useContext } from 'react';

import StoreContext from '../stores/StoreContext';

// Components
import PokeList from './AppBody/PokeList';
import ShowMoreBtn from './AppBody/ShowMoreBtn';

// API for Pokemon list 
import { usePokeList } from '../API/usePokeList';

const AppBody = () => {
    const store = useContext(StoreContext);
    const { fetchedList, getListData, moreListToShow } = usePokeList();

    store.PokeCount === 0 && fetchedList.length === 0 && getListData();

    return (
        <div>
            <PokeList 
                moreListToShow={moreListToShow}
                listData={store.pokeData}
            />
            {
                moreListToShow ?
                <ShowMoreBtn handleClick={() => getListData()}/> :

                // Button will disappear when no more list to load
                null

            }
        </div>

    );
};

export default AppBody;