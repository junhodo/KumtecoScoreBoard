import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home';
import About from './About/About';

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
