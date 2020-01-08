import React from 'react';

import './PokeDataTable.css';

const PokeDataTable = props => {
    //props.item.detail.evolChain && console.log(props.item.detail.evolChain.evolutions);

    return (
        <div className="pokemon-info-table">
            <div className="data-row">
                <h4 className="data-title">Name:</h4>
                <div className="data-text">
                    { props.item.detail.name ? props.item.detail.name : 
                        <span className="not-avairable-text">Not Available</span>}
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Order No:</h4>
                <div className="data-text">
                    { props.item.detail.orderNr ? props.item.detail.orderNr :
                        // No Data
                        <span className="not-avairable-text">Not Available</span>}
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Type:</h4>
                <div className="data-text">
                    { props.item.detail.types ?
                        props.item.detail.types.map(
                        type => <span key={ type } className="poke-detail-text">{ type }</span>) :
                        // No Data
                        <span className="not-avairable-text">Not Available</span> }
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Stats:</h4>
                <div className="data-text">
                    {   
                        props.item.detail.stats ?
                            props.item.detail.stats.slice().reverse().map(
                            item => 
                            <div 
                                key={ item.stat.name } 
                                className="poke-detail-text poke-stat-detail" 
                            >
                                { item.stat.name } / { item.base_stat }
                            </div>
                            ) :
                            // No Data
                            <span className="not-avairable-text">Not Available</span>
                    }                        
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Evolution:</h4>
                <div className="data-text">
                    { props.item.detail.evolChain.evolutions ? 
                        props.item.detail.evolChain.evolutions.map(
                            pokemon => 
                                <div key={pokemon.pokemon_name}>
                                    { pokemon.pokemon_name } 
                                    <span className="evo-level-text"> 
                                        (Lv. { pokemon.min_level })
                                    </span>
                                </div>) :
                        // No Data
                        <span className="not-avairable-text">Not Available</span>
                    }
                </div>
            </div>
            
            <div className="data-row">
                <h4 className="data-title">Ability:</h4>
                <div className="data-text">
                    {   props.item.detail.abilities ?
                        props.item.detail.abilities.map(
                        ability => <span key={ ability } className="poke-detail-text">{ ability }</span>) :
                        // No Data
                        <span className="not-avairable-text">Not Available</span>
                    }
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Move:</h4>
                <div className="data-text">
                    {   
                        props.item.detail.moves ?
                        props.item.detail.moves.map(
                        move => <span key={ move } className="poke-detail-text">{ move }</span>):
                        // No Data
                        <span className="not-avairable-text">Not Available</span>
                    }
                </div>
            </div>

        </div>        
    );
};

export default PokeDataTable;