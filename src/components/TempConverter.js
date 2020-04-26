import React from 'react';

var unitTable = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

var TempConverter = (props) => {
    return (
        <fieldset>
            <label>{unitTable[props.unit]}</label>
            <br/>
            <input value={props.temp} onChange={props.onChange}/>
        </fieldset>
    )
}

export default TempConverter;