import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, useParams } from 'react-router-dom';
import { Nav } from './nav';

const Routing = () => {
    return(
        <Router>
            <Switch>
                // Order of route matters
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact/:country/:state?" component={Contact} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    )
}

const Home = () => {
    return <p>Home page content</p>
}

const About = () => {
    let params = new URLSearchParams(useLocation().search)
    return <p>About page content for {params.get("name")}</p>
}

const Contact = () => {
    let params = useParams()
    return <p>Contact page content for {params.country}</p>
}

const PageNotFound = () => {
    return <p>404 Page Not Found</p>
}

export default Routing