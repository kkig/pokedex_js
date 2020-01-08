import React, { useContext } from 'react';

import { useObserver } from 'mobx-react';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Component
import PokeDetail from './PokeListItem/PokeDetails';
import './PokeListItem.css';

import StoreContext from '../../../stores/StoreContext';

// Material UI
import Laoding from '../../../MaterialUI/Loading';

const PokeListItem = props => {
    
    const store = useContext(StoreContext);
    let selectedPokemon = store.pokeData.filter(item => item.name === props.selectedName)[0];

    /*
    !!selectedPokemon && 
    props.item.id === selectedPokemon.id && 
    console.log(selectedPokemon);
    */
    

    return useObserver(() => (
        <ExpansionPanel 
            expanded={props.expanded === `panel${props.item.name}`} 
            onChange={props.handleChange(`panel${props.item.name}`, props.item)}
        >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${props.item.name}bh-content`}
                    className="poke-list-name"
                    id={`panel${props.item.name}bh-header`}
                >
                    <Typography className="poke-list-title">
                        { props.item.name }
                    </Typography>
                </ExpansionPanelSummary>
                
                {props.selectedName && !!props.item.detail ? 
                <PokeDetail 
                    selectedName={props.selectedName}
                    item={props.item}
                /> :
                <Laoding />
                }

            </ExpansionPanel>  
    ));
};

export default PokeListItem;