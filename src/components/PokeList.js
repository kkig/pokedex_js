import React, { useEffect } from 'react';

import './PokeList.css';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// List data from PokeAPI
import { useList } from '../API/useList';


const PokeList = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
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

            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
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
        </div>
    );
};

export default PokeList;