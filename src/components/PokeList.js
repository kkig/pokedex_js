import React, { useState, useContext, useEffect } from 'react';

import { useObserver } from 'mobx-react';

// CSS
import './PokeList.css';

// Components
import PokeListItem from './PokeListItem';
import StoreContext from '../stores/StoreContext';

// Material UI
import Laoding from '../MaterialUI/Loading';

class PokeDetail {
    constructor(orderNr, types, abilities, stats, moves, sprites) {
        this.orderNr = orderNr;
        this.types = types;
        this.abilities = abilities;
        this.stats = stats;
        this.moves = moves;
        this.sprites = sprites;
    }
};

const PokeList = props => {
    
    const [ expanded, setExpanded ] = React.useState(false);
    const [ fetchedDetail, setFetchedDetail ] = useState(null);
    const [ selectedID, setSelectedID ] = useState(null);

    const store = useContext(StoreContext);

    const getDetailData = item => {
        console.log(item);
        setSelectedID(item.id);
        //store.addDetail(item.id, fetchedDetail);

        const fetchDetailData = () => {
            fetch(item.url)
                .then(res => res.json())
                .then(data => {
                    setFetchedDetail(
                        new PokeDetail(
                            data.order, 
                            data.types.map(item => item.type.name), 
                            data.abilities.map(item => item.ability.name), 
                            data.stats, 
                            data.moves.map(item => item.move.name), 
                            data.sprites))
                    //orderNr, type, abilities, stats, moves
                    console.log(data);
                    console.log('Poke detail fetched');
                })
                .catch(err => console.log(err))
        };

        fetchDetailData();
    };

    const handleChange = (panel, item) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

        isExpanded && item.detail.length === 0 && getDetailData(item);
        //isExpanded && console.log(store.pokeData.filter(item => item.id === id));

    };

    useEffect(() => {
        fetchedDetail && console.log(fetchedDetail);
        selectedID && fetchedDetail && store.addDetail(selectedID, fetchedDetail);
    }, [store, fetchedDetail, selectedID])

    //props.listData.length > 0 && console.log(props.listData);

    return useObserver(() => (
        !props.listData || props.listData.length <= 0 ? 
        <Laoding /> :

        <div>
            {props.listData.map(item => 
                <PokeListItem 
                    key={item.name}
                    handleChange={handleChange}
                    expanded={expanded}
                    item={item}
                />
            )}
        </div>
    ));
};

export default PokeList;