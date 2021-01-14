import React from 'react';
import { Route } from 'react-router-dom';
import { NavBar } from './index';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

const App = () => {
    return (
        <div>
        <NavBar />
        <div className="container-lg">
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
        </div>
        </div>
    );
};
export default App;