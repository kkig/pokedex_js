import React from 'react';

import './PageBtn.css';

// Material UI
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const PageBtn = () => {
    return (
        <div className="pagination-btn-section">
            <Button variant="outlined" color="primary" size="small" className="pagination-btn">
                <NavigateBeforeIcon fontSize="small" />
                Prev
            </Button>
            <Button variant="outlined" color="primary" size="small" className="pagination-btn">
                Next 
                <NavigateNextIcon fontSize="small" />
            </Button>
        </div>        
    );
};

export default PageBtn;