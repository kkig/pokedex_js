import React from 'react';

// Material UI
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const PokeDetail = props => {
    return (        
        <ExpansionPanelDetails>
            <Typography>
                { props.item.url }
            </Typography>
        </ExpansionPanelDetails>
    );
};

export default PokeDetail;