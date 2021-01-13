import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './index';
import { Home, About } from '../pages/index';
import { getSolvedProblem } from '../store/ApiStore';

const App = () => {
    const [solvedData, setSolvedData] = useState([]);
    const statusRefresh = async () => {

    }
    
    useEffect(() => {
        statusRefresh();
    },[]);

    return (
        <div>
        <NavBar />
        <div className="container-lg">
            <Switch>
                <Route exact path="/"><Home solvedData={solvedData}/></Route>
                <Route path="/about"><About/></Route>
            </Switch>
        </div>
        </div>
    );
};
export default App;