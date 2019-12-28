import React from 'react';

import './PokeList.css';

import PokeListItem from './PokeListItem';
import Laoding from '../MaterialUI/Loading';

// List data from PokeAPI
//import { useList } from '../API/useList';

const PokeList = props => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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