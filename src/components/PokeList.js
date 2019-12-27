import React from 'react';

import './PokeList.css';

import PokeListItem from './PokeListItem';

// List data from PokeAPI
import { useList } from '../API/useList';


const PokeList = props => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    props.listData.length > 0 && console.log(props.listData);

    return (
        <div>
            <PokeListItem 
                handleChange={handleChange}
                expanded={expanded}
                listData={props.listData}
            />
        </div>
    );
};

export default PokeList;