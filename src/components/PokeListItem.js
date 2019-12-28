import React from 'react';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PokeListItem = props => {
    return (
        <ExpansionPanel 
            expanded={props.expanded === `panel${props.item.id}`} 
            onChange={props.handleChange(`panel${props.item.id}`)}
        >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${props.item.id}bh-content`}
                    className="poke-list-name"
                    id={`panel${props.item.id}bh-header`}
                >
                    <Typography 
                    style={{
                        textTransform: "capitalize",
                        fontWeight: 600
                        }}
                    >
                        { props.item.name }
                    </Typography>
                </ExpansionPanelSummary>
                
                <ExpansionPanelDetails>
                    <Typography>
                        { props.item.url }
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>  
    );
};

export default PokeListItem;