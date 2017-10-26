import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import HomePage from './Pages/HomePage';
import registerServiceWorker from './registerServiceWorker';




class App extends Component {
    render() {
        return (
            <HomePage />
        );
    }
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
