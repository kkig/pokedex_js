import React, { useState, useContext } from 'react';

import { useObserver } from 'mobx-react';

// CSS
import './PokeList.css';

import PokeDetail from '../../classes/PokeDetailClass';

// Components
import PokeListItem from './PokeListItem';
import StoreContext from '../../stores/StoreContext';

// Material UI
import Laoding from '../../MaterialUI/Loading';

const PokeList = props => {
    
    const [ expanded, setExpanded ] = useState(false);
    const [ fetchedDetail, setFetchedDetail ] = useState(null);
    const [ selectedID, setSelectedID ] = useState(null);

    const [ evolURL, setEvolURL ] = useState(null);

    const store = useContext(StoreContext);

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
                console.log('Poke detail fetched');
            })
            .catch(err => console.log(err))
    };

    const fetchEvolURL = URL => {
        const endpoint = URL;

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                const fetchedEvolURL = data.evolution_chain.url;
                const storedEvolURL = store.evolChain.filter(item => item.evolURL === fetchedEvolURL);

                storedEvolURL.length > 0 ?
                store.addDetail(selectedID, {...fetchedDetail, evolChain: storedEvolURL[0]}) : 
                fetchEvolChain();

                setEvolURL(fetchedEvolURL);
                
            })
        
    };

    const getDetailData = item => {
        console.log(item);
        setSelectedID(item.id);

        fetchDetailData(item);
    };

    const fetchEvolChain = () => {

        fetch(evolURL)
            .then(res => res.json())
            .then(data => {
                const chainData = data.chain;

                let evoChain = [];
                let evoData = chainData;
                    
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

                const evolInfo = { evolURL: evolURL, evolutions: evoChain };

                store.addEvolChain(evolInfo);
                store.addDetail(selectedID, { ...fetchedDetail, evolChain: evolInfo });

            }) 
            .catch(err => console.log(err)) // End of fetch()
    };

    const handleChange = (panel, item) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

        isExpanded && item.detail.length === 0 && getDetailData(item);

    };

    !!fetchedDetail && !!expanded && fetchEvolURL(fetchedDetail.speciesURL);

    return useObserver(() => (
        !!props.listData && props.listData.length > 0 ? 

        (<div>
            {props.listData.map(item => 
                <PokeListItem 
                    key={item.name}
                    handleChange={handleChange}
                    expanded={expanded}
                    selectedID={selectedID}

                    item={item}
                />
            )}
        </div> ):

        <Laoding /> 
    ));
};

export default PokeList;