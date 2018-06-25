import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './Landing'
import * as routes from '../constants/route'
import AddBook from './AddBook';
import Books from './Books';

const App = () => 
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={routes.LANDING}
            component={() => <LandingPage />}/>

            <Route exact path={routes.ADD} component={() => <AddBook />} />
            <Route exact path={routes.BOOKS} component={() => <Books />} />
        </div>
    </Router>

export default App;
