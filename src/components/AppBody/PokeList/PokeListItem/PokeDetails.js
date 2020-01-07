import React from 'react';

import './PokeDetails.css';
import PokeDataTable from './PokeDataTable';

// Material UI
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Laoding from '../../../../MaterialUI/Loading';

import { useObserver } from 'mobx-react';

const PokeDetail = props => {

    return useObserver(() => (  
        props.item.detail.length === 0 ?
        <Laoding /> :
        <div className="detail-container">
            <ExpansionPanelDetails>
                { props.item.detail.sprites.front_default ? 
                    <div className="poke-image-section">
                        <img 
                            src={props.item.detail.sprites.front_default} 
                            alt={props.item.name} 
                            key={props.item.name} 
                            height="100px"
                        /> 
                    </div> : 
                    <div className="poke-image-section not-available-img">
                        No Image
                    </div> 
                }

                <PokeDataTable 
                    item={props.item}
                />

            </ExpansionPanelDetails>
        </div>

    ));
};

export default PokeDetail;