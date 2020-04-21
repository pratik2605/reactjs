import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.css';
import Profile from './App';
import PropTypes from 'prop-types';
import List from './List';
import Score from './Score';
import TempConverter from './TempConverter';

function App() {
  return (
    // React.Fragment
    <>
      <Profile 
        name="Pratik" 
        url="https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301"
      />
      <hr/>
      <Profile 
        name="Pratik 2" 
        url="https://vignette.wikia.nocookie.net/phineasandferb/images/6/6a/Doofenshmirtz_official.jpg/revision/latest/scale-to-width-down/240?cb=20140503030926"
      />
      <hr/>
      <Profile 
        name="Pratik 3" 
        url="https://vignette.wikia.nocookie.net/phineasandferb/images/b/be/Monogram_-_Rollercoaster_avatar_1.png/revision/latest?cb=20100131231239"
      />
      <hr/>
    </>
  );
}

function List2(props) {
  var itemList = props.names.map(function(item, i) {
    return <li key={i}>{item}</li>
  })
  var errMsg = ''
  if (props.names[0] === 'Pratikk') {
    errMsg = 'I am a error'
  }
  return (
    <div>
      { errMsg && <h2>{errMsg}</h2>}
      <ul>
        {itemList}
      </ul>
    </div>
  );
}

List2.defaultProps = {
  names: []
}
List2.propTypes = {
  names: PropTypes.array.isRequired,
  config: PropTypes.exact({
    size: PropTypes.number.isRequired
  })
}
var names = ['Pratik', 'Shah', 'pratik2']

var covertFtoC = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
var covertCtoF = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

var NewApp = () => {
  var [celsius, setCelsius] = useState(0);
  var [fahrenheit, setFahrenheit] = useState(0);
  var handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(covertCtoF(e.target.value));
  };
  var handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius(covertFtoC(e.target.value));
};
  return (
    <>
      <TempConverter temp={celsius} unit='c' onChange={handleCelsiusChange}/>
      <TempConverter temp = {fahrenheit} unit='f' onChange={handleFahrenheitChange}/>
    </>
  )
}
render(<NewApp/>, document.getElementById('root'));