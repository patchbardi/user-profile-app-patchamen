/// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
};

export default App;
