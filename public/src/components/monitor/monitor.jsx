import React from 'react';
import AddPage from './add-page.jsx';
import Watchlist from './watchlist.jsx';

function Monitor() {
    return (
        <div id='monitor-page-container'>
            <AddPage />
            <Watchlist />
        </div>
    );
};

export default Monitor