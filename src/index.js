import React from 'react';
import { render } from 'react-dom';
import App from './App';

//Get any data save previously and pass it into App as a prop
const appData = window.localStorage.appData;

render(<App appData={appData} />, document.getElementById('root'));
