import React from 'react';

const unit = {
    l: 'Liter',
    p: 'Pint',
    g: 'Galon'
};

const LiquidConverter = function (props) {
    return (
        <fieldset>
            <label>{unit[props.unit]}</label>
            <br/>
            <input value={props.liquid} onChange={props.onChange} />
        </fieldset>
    )
}

export default LiquidConverter;