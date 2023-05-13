import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    state = { name: 'Alamin' };

    render() {
        return (
        <div>
            <Child name={this.state.name} />
        </div>
        )
    }
}
