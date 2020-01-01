import React, { useState, useContext, useEffect } from 'react';

import { useObserver } from 'mobx-react';

// CSS
import './PokeList.css';

import PokeDetail from '../classes/PokeDetailClass';

// Components
import PokeListItem from './PokeListItem';
import StoreContext from '../stores/StoreContext';

// Material UI
import Laoding from '../MaterialUI/Loading';

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
                console.log(data);
                console.log('Poke detail fetched');
            })
            .catch(err => console.log(err))
    };

    const fetchEvolURL = URL => {
        const endpoint = URL;
        console.log(endpoint);

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                const fetchedEvolURL = data.evolution_chain.url;
                const storedEvolURL = store.evolChain.filter(item => item.evolURL === fetchedEvolURL);

                storedEvolURL.length > 0 ?
                store.addDetail(selectedID, {...fetchedDetail, evolChain: storedEvolURL[0]}) : 
                fetchEvolChain();

                setEvolURL(fetchedEvolURL);
                
                //console.log(store.evolChain.filter(item => item.evolURL === fetchedEvolURL));
            })
        
        /*
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data.chain.evolves_to);
                data.chain.evolves_to.map(item => console.log(item.species));
            })
        */
    };

    const getDetailData = item => {
        console.log(item);
        setSelectedID(item.id);
        //store.addDetail(item.id, fetchedDetail);

        fetchDetailData(item);
    };

    const fetchEvolChain = () => {
        console.log(evolURL);

        fetch(evolURL)
            .then(res => res.json())
            .then(data => {
                const chainData = data.chain;

                console.log(chainData);

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

            //console.log({ ...fetchedDetail, evolChain: evolInfo })
            
            console.log(evolInfo);

            store.addEvolChain(evolInfo);
            store.addDetail(selectedID, { ...fetchedDetail, evolChain: evolInfo });

            }) // End of fetch()
    };

    const handleChange = (panel, item) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

        isExpanded && item.detail.length === 0 && getDetailData(item);
        //isExpanded && console.log(store.pokeData.filter(item => item.id === id));

    };

    fetchedDetail && fetchEvolURL(fetchedDetail.speciesURL);

    useEffect(() => {
        //fetchedDetail && console.log(fetchedDetail);
        //selectedID && fetchedDetail && store.addDetail(selectedID, fetchedDetail);
    }, [store, fetchedDetail, selectedID])

    //props.listData.length > 0 && console.log(props.listData);
    //evolURL && console.log(evolURL);
    useEffect(() => {
        //console.log(store.evolChain.hasOwnProperty(evolURL));
        /*
        evolURL && store.evolChain.filter(item => item.evolURL === evolURL).length === 0 && fetchEvolChain();
        console.log(store.evolChain);
        */
    }, [evolURL])

    return useObserver(() => (
        !props.listData || props.listData.length <= 0 ? 
        <Laoding /> :

        <div>
            {props.listData.map(item => 
                <PokeListItem 
                    key={item.name}
                    handleChange={handleChange}
                    expanded={expanded}
                    selectedID={selectedID}

                    item={item}
                />
            )}
        </div>
    ));
};

export default PokeList;