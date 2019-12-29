import React from 'react';

import './PokeDetail.css';

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
        <ExpansionPanelDetails>
                { props.item.detail.sprites ? 
                    <img 
                        src={props.item.detail.sprites.front_default} 
                        alt={props.item.name} 
                        key={props.item.name} 
                        height="100px"
                    /> 
                    //console.log(imgArray)
                    //imgArray.reverse().map(url => url && <img src={url} alt="pokemon" key={url}/>)
                : null }
            <div className="pokemon-info-table">
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Order No:</strong></td>
                            <td>{ props.item.detail.orderNr && props.item.detail.orderNr }</td>
                        </tr>
                        <tr>
                            <td><strong>Type:</strong></td>
                            <td>
                                { props.item.detail.types.map(
                                type => <span key={ type } className="poke-detail-text">{ type }</span>) }
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Stats:</strong></td>
                            <td>
                                { props.item.detail.stats.reverse().map(
                                    item => 
                                    <span key={ item.stat.name } className="poke-detail-text" style={{ textTransform: "uppercase"}}>
                                        { item.stat.name } / { item.base_stat }
                                    </span>
                                ) }
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Ability:</strong></td>
                            <td>
                                { props.item.detail.abilities.map(
                                ability => <span key={ ability} className="poke-detail-text">{ ability }</span>) }
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Move:</strong></td>
                            <td>
                                { props.item.detail.moves.map(
                                move => <span key={ move } className="poke-detail-text">{ move }</span>) }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ExpansionPanelDetails>
    ));
};

export default PokeDetail;