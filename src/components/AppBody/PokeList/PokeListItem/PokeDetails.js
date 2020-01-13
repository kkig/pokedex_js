import React from 'react';

import './PokeDetails.css';
import PokeDataTable from './PokeDataTable';

// Material UI
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Laoding from '../../../../MaterialUI/Loading';

import { useObserver } from 'mobx-react';

const PokeDetail = ({ item }) => {

    return useObserver(() => (  
        
        <div className="detail-container" data-testid="detail-container">
            {   
                !!item.detail && item.detail.length !== 0 ?

                <ExpansionPanelDetails data-testid="pokemon-details">
                    { item.detail.sprites !== undefined && item.detail.sprites.front_default ? 
                        <div className="poke-image-section">
                            <img 
                                src={item.detail.sprites.front_default} 
                                alt={item.name} 
                                key={item.name} 
                            /> 
                        </div> : 

                        <div className="poke-image-section not-available-img">
                            No Image
                        </div> 
                    }

                    <PokeDataTable 
                        item={item}
                    />

                </ExpansionPanelDetails> :
                <code data-testid="icon-loading-detail">
                    <Laoding />
                </code>

            }
        </div>

    ));
};

export default PokeDetail;