import React, { Component } from 'react'

export default class GrandChild extends Component {
  render() {
    return (
      <div>
        <h1>Grand-child Component</h1>
        <h4>{ this.props.nm }</h4>
      </div>
    )
  }
}
