import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Nav } from './components/nav';
import { LiquidConverterCalc } from './components/LiquidConverterCalc'
import Score from './components/Score'
import { TempConverterCalc } from './components/TempConverterCalc'
import TicTac from './components/TicTac'
import ContactForm from './components/ContactForm'
import ContactFormAjax from './components/ContactFormAjax'
import List from './components/List'
import { ProfileList } from './components/ProfileList'

const App = () => {
    return (
        <Router>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/liquid-converter" component={LiquidConverterCalc} />
            <Route path="/score" render={() => <Score name = {'Pratik'} />} />
            <Route path="/temp-converter" component={TempConverterCalc} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/contact-ajax" component={ContactFormAjax} />
            <Route path="/list" render={() => <List optionsList = {["One", "Two", "Three"]}/>} />
            <Route path="/profile-list" component={ProfileList} />
            <Route path="/tic-tac" component={TicTac} />
        </Router>
    )
}

const Home = () => {
    return (
        <p>
            Some exercises done while learning React.
        </p>
    )
}

render(<App />, document.getElementById('root'))