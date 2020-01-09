import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PokeDetails from './PokeDetails';

afterEach(cleanup);

it("When detail data is not ready, display loading icon", () => {
    const { getByTestId } = render(<PokeDetails item={{}} />); 

    expect(getByTestId('icon-loading-detail')).toBeInTheDocument();
});

it("When detail data is ready, display detail data", () => {
    const { getByTestId } = render(<PokeDetails 
        item={{
            name: "ivysaur", 
            url: "https://pokeapi.co/api/v2/pokemon/2/",
            id: 2,
            detail: { 
                id: 2,
                name: "ivysaur",
                orderNr: 2,
                types: ["poison", "grass"],
                abilities: ["chlorophyll", "overgrow"],
                stats: [{base_stat: 60, effort: 0, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }}],
                moves: ["swords-dance", "cut"],
                sprites: {back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"},
                speciesURL: "https://pokeapi.co/api/v2/pokemon-species/2/",
                evolChain: {
                    evolURL: "https://pokeapi.co/api/v2/evolution-chain/1/", 
                    evolutions: [{ pokemon_name: "bulbasaur", min_level: 1 }]
                }
            }
        }}
     />);    

    expect(getByTestId('pokemon-details')).toBeInTheDocument();
});
