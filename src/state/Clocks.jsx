import React, { Component } from 'react'
import styles from './Clocks.module.css'

export default class Clocks extends Component {
    constructor(props){
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => { this.tick()}, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <h1 className={styles.main}>
                <span className='text'>{this.state.date.toLocaleTimeString()}</span>
            </h1>
        )
    }
}
