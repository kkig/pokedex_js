import React from 'react';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PokeListItem = props => {
    return (
        <div>
            <ExpansionPanel expanded={props.expanded === 'panel11'} onChange={props.handleChange('panel11')}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel11bh-header"
                >
                <Typography>General settings</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={props.expanded === 'panel12'} onChange={props.handleChange('panel12')}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel12bh-content"
                id="panel12bh-header"
                >
                <Typography>Users</Typography>
                <Typography>
                    You are currently not an owner
                </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                    diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            {props.listData.map(item => 
                <ExpansionPanel 
                    key={item.id}
                    expanded={props.expanded === `panel${item.id}`} 
                    onChange={props.handleChange(`panel${item.id}`)}
                >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${item.id}bh-content`}
                        className="poke-list-name"
                        id={`panel${item.id}bh-header`}
                        >
                        <Typography style={{
                            textTransform: "capitalize",
                            fontWeight: 600
                            }}
                        >
                            { item.name }
                        </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                        <Typography>
                            { item.url }
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )}
        </div>
    );
};

export default PokeListItem;