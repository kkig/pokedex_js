import React from 'react';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Component
import PokeDetail from './PokeListItem/PokeDetails';
import './PokeListItem.css';

const PokeListItem = props => {

    return (
        <ExpansionPanel 
            expanded={props.expanded === `panel${props.item.id}`} 
            onChange={props.handleChange(`panel${props.item.id}`, props.item)}
        >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${props.item.id}bh-content`}
                    className="poke-list-name"
                    id={`panel${props.item.id}bh-header`}
                >
                    <Typography className="poke-list-title">
                        { props.item.name }
                    </Typography>
                </ExpansionPanelSummary>
                
                <PokeDetail 
                    selectedID={props.selectedID}
                    item={props.item}
                />

            </ExpansionPanel>  
    );
};

export default PokeListItem;