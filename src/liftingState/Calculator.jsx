import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput';
import {convert, toCelsius, toFarhenheit} from './lib/converter'
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends Component {
    state = {temperature:'', scale:'c'}

    handleChange = (e, scale)=> {
        this.setState({
            temperature:e.target.value,
            scale,
        })
    }

    render() {
        const {temperature, scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const farhenheit = scale === 'c' ? convert(temperature, toFarhenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleChange} />
                <TemperatureInput scale='f' temperature={farhenheit} onTemperatureChange={this.handleChange} />

                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        )
    }
}
