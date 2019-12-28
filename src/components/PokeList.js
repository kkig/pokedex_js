import React, { useState, useContext, useEffect } from 'react';

// CSS
import './PokeList.css';

// Components
import PokeListItem from './PokeListItem';
import StoreContext from '../stores/StoreContext';

// Material UI
import Laoding from '../MaterialUI/Loading';

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
                .then(data => setFetchedDetail(data))
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

    return (
        !props.listData || props.listData.length <= 0 ? 
        <Laoding /> :

        <div>
            {props.listData.map(item => 
                <PokeListItem 
                    key={item.id}
                    handleChange={handleChange}
                    expanded={expanded}
                    item={item}
                />
            )}
        </div>
    );
};

export default PokeList;