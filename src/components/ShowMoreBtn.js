import React from 'react';

import './ShowMoreBtn.css';

// Material UI
import Button from '@material-ui/core/Button';

const ShowMoreBtn = () => {
    return (
        <div className="more-btn-section">
            <Button 
                variant="contained" 
                color="primary" 
                className="more-btn"
            >
                Show More
            </Button>
        </div>
    );
};

export default ShowMoreBtn;