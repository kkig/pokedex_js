import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PokeDataTable from './PokeDataTable';

afterEach(cleanup);

it("When data is not available, display 'Not Available'", () => {
    const { getByTestId } = 
    render(
    <PokeDataTable 
        item={{
            name: "ivysaur", 
            url: "https://pokeapi.co/api/v2/pokemon/2/",
            id: 2,
            detail: { 
                id: 2,
                sprites: {
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
                },
                speciesURL: "https://pokeapi.co/api/v2/pokemon-species/2/",

            }
        }}
    />);

    expect(getByTestId('table-pokemon-name')).toHaveTextContent('Not Available');
    expect(getByTestId('table-pokemon-orderNr')).toHaveTextContent('Not Available');
    expect(getByTestId('table-pokemon-types')).toHaveTextContent('Not Available');
    expect(getByTestId('table-pokemon-stat')).toHaveTextContent('Not Available');
    expect(getByTestId('table-pokemon-evolution')).toHaveTextContent('Not Available');
    expect(getByTestId('table-pokemon-ability')).toHaveTextContent('Not Available');
    expect(getByTestId('table-pokemon-move')).toHaveTextContent('Not Available');
});