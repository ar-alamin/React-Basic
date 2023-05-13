import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Farhenheit'
}

function TemperatureInput({scale, temperature, onTemperatureChange}) {

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input type='text' value={temperature} onChange={(e)=> onTemperatureChange(e, scale)} />
        </fieldset>
    )
}

export default TemperatureInput