import React from 'react';
import './AppBody.css';

import PokeList from '../components/PokeList';
import PageBtn from '../components/PageBtn';

const AppBody = () => {

    return (
        <div>
            <PokeList />
            <PageBtn />
        </div>

    );
};

export default AppBody;