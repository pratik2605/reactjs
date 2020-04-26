import React, { useState } from 'react';
import TempConverter from './TempConverter'

var covertFtoC = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
};
var covertCtoF = (celsius) => {
    return (celsius * 9) / 5 + 32;
};

export var TempConverterCalc = () => {
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
            <TempConverter temp={celsius} unit='c' onChange={handleCelsiusChange} />
            <TempConverter temp={fahrenheit} unit='f' onChange={handleFahrenheitChange} />
        </>
    )
}