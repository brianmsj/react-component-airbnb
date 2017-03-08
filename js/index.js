require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Nav title = "Test"/>, document.getElementById('app'))
);
