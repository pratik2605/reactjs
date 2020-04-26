import React, {useState} from 'react';
import '../index.css';
import LiquidConverter from './LiquidConverter';

function literToGallon(liter) {
    return Number(liter * 0.264172).toFixed(2);
}

function literToPint(liter) {
    return Number(liter * 2.113376).toFixed(2);
}

function gallonToLiter(gallon) {
    return Number(gallon / 0.264172).toFixed(2);
}

function gallonToPint(gallon) {
    return Number(gallon * 8).toFixed(2);
}

function pintToLiter(pint) {
    return Number(pint / 2.113376).toFixed(2);
}
function pintToGallon(pint) {
    return Number(pint / 8).toFixed(2);
}

export var LiquidConverterCalc = () => {
    let [liter, setLiter] = useState(0);
    let [pint, setPint] = useState(() => literToPint(liter));
    let [gallon, setGallon] = useState(() => literToGallon(liter));

    var handleLiterChange = function(e) {
        setLiter(e.target.value);
        setPint(literToPint(e.target.value));
        setGallon(literToGallon(e.target.value));
    };
    var handlePintChange = function(e) {
        setPint(e.target.value);
        setLiter(pintToLiter(e.target.value));
        setGallon(pintToGallon(e.target.value));
    };
    var handleGallonChange = function(e) {
        setGallon(e.target.value);
        setPint(gallonToPint(e.target.value));
        setLiter(gallonToLiter(e.target.value));
    };
    return (
        <>
        <LiquidConverter unit='l' liquid={liter} onChange={handleLiterChange} />
        <LiquidConverter unit='p' liquid={pint} onChange={handlePintChange} />
        <LiquidConverter unit='g' liquid={gallon} onChange={handleGallonChange} />
        </>
    )
}
