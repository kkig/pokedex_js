import React from 'react';

import './ShowMoreBtn.css';

// Material UI
import Button from '@material-ui/core/Button';

const ShowMoreBtn = ({ endpoint, handleClick }) => {

    return (

        // Only display button when there is more list to show

        <div className="more-btn-section" data-testid="btn-container">
            {
                endpoint !== null ? 
            <Button 
                variant="contained" 
                className="more-btn"
                data-testid="show-more-btn"
                onClick={handleClick}
            >
                Show More
            </Button>   :

                null
            }
        </div>

    );
};

export default ShowMoreBtn;