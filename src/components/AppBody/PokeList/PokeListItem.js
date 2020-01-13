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

const PokeListItem = ({ expanded, item, handleChange, handleBtnClick  }) => {

    return useObserver(() => (
        <ExpansionPanel 
            expanded={expanded === `panel${item.name}`} 
            onChange={handleChange(`panel${item.name}`, item)}
        >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${item.name}bh-content`}
                    className="poke-list-name"
                    id={`panel${item.name}bh-header`}
                >
                    <Typography className="poke-list-title">
                        { item.name }
                    </Typography>
                </ExpansionPanelSummary>
                

                <PokeDetail 
                    item={item}
                /> 

                <div className="close-btn-container">
                    <Button 
                        className="close-btn-text"
                        color="primary"
                        onClick={handleBtnClick}
                    >
                        Close
                    </Button>
                </div>

            </ExpansionPanel>  
    ));
};

export default PokeListItem;