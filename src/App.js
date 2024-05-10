import React from 'react';
import CardHandler from './card/cardhandler';
import Nav from './nav';
import './styles/App.css';

function App() {
    const switchVar = true;

    return (
        <div className='App'>
            <Nav />
            {switchVar && <CardHandler />}
        </div>
    );
}

export default App;
