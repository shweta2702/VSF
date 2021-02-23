import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddSeed from './AddSeed'
import ViewSeed from './ViewSeed';
import Home from './Home'
import SearchByName from './SearchByName'
import SearchById from './SearchById'

function ReactRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listseeds" >List of Seeds</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add">Add/Update</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/searchByCommonName">Search By Common Name</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/searchById">Search By ID</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                
                <Switch>
                    <Route exact path="/listseeds">
                        <ViewSeed></ViewSeed>
                    </Route>
                    <Route path="/add">
                        <AddSeed></AddSeed>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/searchByCommonName" component={SearchByName}/>
                    <Route path="/searchById" component={SearchById}/>
                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
