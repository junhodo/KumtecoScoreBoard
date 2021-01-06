
import React from 'react';
import { Route } from 'react-router-dom';
import { NavBar } from '../components/index';
import { Home, About } from '../pages/index';

const App = () => {
    return (
        <div>
        <NavBar />
        <div className="container-lg">
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
        </div>
        </div>
    );
};
export default App;
  