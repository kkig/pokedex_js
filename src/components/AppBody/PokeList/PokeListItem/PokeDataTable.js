import React from 'react';

import './PokeDataTable.css';

const PokeDataTable = ({ item }) => {

    return (
        <div className="pokemon-info-table">
            <div className="data-row">
                <h4 className="data-title">
                    Name:
                </h4>
                <div className="data-text">
                    { item.detail.name ? item.detail.name : 
                        <span 
                            className="not-avairable-text"
                            data-testid="table-pokemon-name"
                        >
                            Not Available
                        </span>}
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Order No:</h4>
                <div className="data-text">
                    { item.detail.orderNr ? item.detail.orderNr :
                        // No Data
                        <span 
                            className="not-avairable-text"
                            data-testid="table-pokemon-orderNr"
                        >
                            Not Available
                        </span>}
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Type:</h4>
                <div className="data-text">
                    { item.detail.types ?
                        item.detail.types.map( type => 
                            <span key={ type } className="poke-detail-text detail-list">
                                { type }
                            </span>) :

                        // No Data
                        <span 
                            className="not-avairable-text"
                            data-testid="table-pokemon-types"
                        >
                            Not Available
                        </span> }
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Stats:</h4>
                <div className="data-text">
                    {   
                        item.detail.stats ?
                            item.detail.stats.slice().reverse().map(
                            item => 
                            <div 
                                key={ item.stat.name } 
                                className="poke-detail-text poke-stat-detail" 
                            >
                                { item.stat.name } / { item.base_stat }
                            </div>
                            ) :
                            // No Data
                            <span 
                                className="not-avairable-text"
                                data-testid="table-pokemon-stat"
                            >
                                    Not Available
                            </span>
                    }                        
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Evolution:</h4>
                <div className="data-text">
                    { item.detail.evolChain && item.detail.evolChain.evolutions ? 
                        item.detail.evolChain.evolutions.map(
                            pokemon => 
                                <div key={pokemon.pokemon_name}>
                                    { pokemon.pokemon_name } 
                                    <span className="evo-level-text"> 
                                        { pokemon.trigger_name === "use-item" ?
                                        `(${pokemon.item.name})` :
                                        `(Lv. ${pokemon.min_level ? pokemon.min_level : '-'})`
                                        }
                                    </span>
                                </div>) :
                        // No Data
                        <span 
                            className="not-avairable-text"
                            data-testid="table-pokemon-evolution"
                        >
                            Not Available
                        </span>
                    }
                </div>
            </div>
            
            <div className="data-row">
                <h4 className="data-title">Ability:</h4>
                <div className="data-text">
                    {   item.detail.abilities ?
                        item.detail.abilities.map( ability => 
                            <span key={ ability } className="poke-detail-text detail-list">
                                { ability }
                            </span>) :

                        // No Data
                        <span 
                            className="not-avairable-text"
                            data-testid="table-pokemon-ability"
                        >
                            Not Available
                        </span>
                    }
                </div>
            </div>

            <div className="data-row">
                <h4 className="data-title">Move:</h4>
                <div className="data-text">
                    {   
                        item.detail.moves ?
                        item.detail.moves.map( move => 
                            <span key={ move } className="poke-detail-text detail-list">
                                { move }
                            </span>):
                        // No Data
                        <span 
                            className="not-avairable-text"
                            data-testid="table-pokemon-move"
                        >
                            Not Available
                        </span>
                    }
                </div>
            </div>

        </div>        
    );
};

export default PokeDataTable;