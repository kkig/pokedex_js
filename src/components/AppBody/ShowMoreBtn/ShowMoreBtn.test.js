import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ShowMoreBtn from './ShowMoreBtn';

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<ShowMoreBtn endpoint="https://pokeapi.co/api/v2/pokemon/?limit=20" />);
    expect(asFragment()).toMatchSnapshot();
});


it("when there is more list, button will be displayed", () => {
    const { getByTestId } = render(<ShowMoreBtn endpoint="https://pokeapi.co/api/v2/pokemon/?limit=20" />);

    expect(getByTestId('show-more-btn')).toBeVisible();
});


it("when there is no more list to add, button will not be visible", () => {
    const { getByTestId } = render(<ShowMoreBtn endpoint={null} />);
    expect(getByTestId('btn-container')).toBeEmpty();
});



