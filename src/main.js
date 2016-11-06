import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const colors = {
    white : '#F0ECD8',
    green : '#75D1C5',
    blue : '#357E8F',
    darkBlue : '#142940',
    red : '#802C2A',
    pink : '#D6757E'
};

const appDOM = document.getElementById('app');

ReactDOM.render(<App/>, appDOM);
