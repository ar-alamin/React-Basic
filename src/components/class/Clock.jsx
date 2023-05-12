import React, { Component } from 'react'

class Clock extends Component {
  render() {
    return (
      <h1>
        <span>Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    )
  }
}

export default Clock;