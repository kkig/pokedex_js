import React from 'react';

import { useObserver } from 'mobx-react';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

// Component
import PokeDetail from './PokeListItem/PokeDetails';
import './PokeListItem.css';

const PokeListItem = props => {

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
                

                <PokeDetail 
                    item={props.item}
                /> 

                <div className="close-btn-container">
                    <Button 
                        className="close-btn-text"
                        color="primary"
                        onClick={props.handleBtnClick}
                    >
                        Close
                    </Button>
                </div>

            </ExpansionPanel>  
    ));
};

export default PokeListItem;