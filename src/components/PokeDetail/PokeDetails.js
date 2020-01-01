import React from 'react';

import './PokeDetails.css';
import PokeDataTable from './PokeDataTable';

// Material UI
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Laoding from '../../MaterialUI/Loading';

import { useObserver } from 'mobx-react';

const PokeDetail = props => {

    //props.item.detail.sprites && console.log(props.item.detail.sprites.front_default);

    //let defaultImg = props.item.detail.sprites ? props.item.detail.sprites.front_default : null;
    //let imgArray = props.item.detail.sprites ? Object.values(props.item.detail.sprites) : null;
    //props.item.detail.sprites && console.log(store.pokeData.filter(item => item.name === props.item.name)[0].detail.sprites);

    return useObserver(() => (  
        props.item.detail.length === 0 ?
        <Laoding /> :
        <div className="detail-container">
            <ExpansionPanelDetails>
                { props.item.detail.sprites ? 
                    <div className="poke-image-section">
                        <img 
                            src={props.item.detail.sprites.front_default} 
                            alt={props.item.name} 
                            key={props.item.name} 
                            height="100px"
                        /> 
                    </div>
                        //console.log(imgArray)
                        //imgArray.reverse().map(url => url && <img src={url} alt="pokemon" key={url}/>)
                : null }

                <PokeDataTable 
                    item={props.item}
                    evolData={props.evolData}
                />

            </ExpansionPanelDetails>
        </div>

    ));
};

export default PokeDetail;