import React, { Component } from 'react';
import { render } from 'react-dom';
import Icecream from './Icecream';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="app-container">
        <Icecream />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
