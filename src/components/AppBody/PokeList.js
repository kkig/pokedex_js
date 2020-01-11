import React, { useState, useContext, useEffect } from 'react';

import { useObserver } from 'mobx-react';

// CSS
import './PokeList.css';

import PokeDetail from '../../classes/PokeDetailClass';

// Components
import PokeListItem from './PokeList/PokeListItem';
import StoreContext from '../../stores/StoreContext';

// Material UI
import Laoding from '../../MaterialUI/Loading';

const PokeList = ({ listData }) => {
    
    const [ expanded, setExpanded ] = useState(false);
    const [ fetchedDetail, setFetchedDetail ] = useState(null);
    const [ selectedItem, setselectedItem ] = useState(null);

    const [ evolURL, setEvolURL ] = useState(null);

    const store = useContext(StoreContext);
    
    const handleChange = (panel, item) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        isExpanded && item.detail.length === 0 && setselectedItem(item);
    };

    const handleBtnClick = () => {
        setExpanded(false);
    };

    useEffect(() => {
        // Get detail of pokemon except evolChain data
        const fetchDetailData = item => {
            fetch(item.url)
                .then(res => res.json())
                .then(data => {
                    setFetchedDetail(
                        new PokeDetail(
                            data.id,    // id
                            data.name,  // name
                            data.order, // orderNr
                            data.types.map(item => item.type.name), // type
                            data.abilities.map(item => item.ability.name),  // abilities
                            data.stats, // stats
                            data.moves.map(item => item.move.name), // moves
                            data.sprites,   // img
                            data.species.url    // url for species data
                            ))
                })
                .catch(err => console.log(err))
        };

        selectedItem !== null && fetchDetailData(selectedItem);
    }, [selectedItem]);


    // Get URL required to get evolChain data
    useEffect(() => {

        const fetchEvolURL = async URL => {
            const pokemonDetail = await fetchedDetail;

            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    const fetchedEvolURL = data.evolution_chain.url;
                    const storedEvolURL = store.evolChain.filter(item => item.evolURL === fetchedEvolURL);

                    if(storedEvolURL.length > 0) {

                        // Get evolChain from MobX data
                        store.addDetail(selectedItem.name, {...pokemonDetail, evolChain: storedEvolURL[0]});

                        setEvolURL(null);
                        setFetchedDetail(null);

                    } else {

                        // Set evolURL to make API request
                        setEvolURL(fetchedEvolURL);

                    }
                    
                })
                .catch(err => console.log(`Error fetching evolution chain: ${err}`))
            
        };        

        fetchedDetail !== null && selectedItem !== null && fetchEvolURL(fetchedDetail.speciesURL);

    }, [store, fetchedDetail, selectedItem]);

    useEffect(() => {
        // Get data for possible evolution
        const fetchEvolChain = async () => {

            const evolChainURL = await evolURL;

            fetch(evolChainURL)
                .then(res => res.json())
                .then(data => {
                    const chainData = data.chain;

                    let evoChain = [];
                    let evoData = chainData;
                    
                    // Get all possible pokemons for evolution
                    do {
                        let evoDetails = evoData['evolution_details'][0];
                        
                        evoChain.push({
                            "pokemon_name": evoData.species.name,
                            "min_level": !evoDetails ? 1 : evoDetails.min_level,
                            "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                            "item": !evoDetails ? null : evoDetails.item
                        });
                        
                        evoData = evoData['evolves_to'][0];
                    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

                    const evolInfo = { evolURL: evolChainURL, evolutions: evoChain };
                    console.log(evolInfo);

                    // Update data on mobX
                    store.addEvolChain(evolInfo);
                    store.addDetail(selectedItem.name, { ...fetchedDetail, evolChain: evolInfo });

                    // Reset URL value
                    setEvolURL(null);
                    setFetchedDetail(null);

                }) 
                .catch(err => console.log(err)) // End of fetch()

        };

        evolURL !== null && selectedItem !== null && fetchEvolChain();

    }, [store, evolURL, fetchedDetail, selectedItem]);

    return useObserver(() => (
        !!listData && listData.length > 0 ? 

        <div>
            {listData.map(item => 
                <PokeListItem 
                    key={item.name}
                    handleChange={handleChange}
                    expanded={expanded}
                    selectedName={selectedItem ? selectedItem.name : null}
                    item={item}
                    handleBtnClick={handleBtnClick}
                />
            )}
        </div> :

        <Laoding data-testid="list-loading-icon"/> 
    ));
};

export default PokeList;