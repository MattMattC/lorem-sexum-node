import React from 'react';
import logo from './logo.svg';
import './App.css';
import { generateFromNbWords } from '@lorem-sexum/node';

console.log('generateFromNbWords', generateFromNbWords);

function App() {
    const test = generateFromNbWords(30);
    console.log( test);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
