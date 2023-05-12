import React, { Component } from 'react'
import styles from './State.module.css'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    handleIncrement = ()=> {
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = ()=> {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        const {count} = this.state;

        return (
            <div className={styles.container}>
                <h1>Count: {count} </h1>
                <button onClick={this.handleIncrement} disabled={count === 5 ? true : false}> + </button>
                <button onClick={this.handleDecrement} disabled={count === 0 ? true : false}> - </button>
            </div>
        )
    }
}
