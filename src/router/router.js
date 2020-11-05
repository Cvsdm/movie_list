import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from "react";
import MovieDetails from "../MovieDetails";
import MovieList from "../MovieList";
import routes from "./routes";

/**
 * Creation of our React Router for our App
 * @returns {JSX.Element} - custom router
 */
function router() {
    return (
        <Router>
            <Switch>
                <Route exact path={routes.home} component={MovieList}/>
                <Route path={routes.movie + ':movieId'} component={MovieDetails}/>
            </Switch>
        </Router>
    )
}

export default router;
