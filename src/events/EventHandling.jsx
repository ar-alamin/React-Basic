import React, { Component } from 'react'
import styles from './Event.module.css'

export default class EventHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { locale: 'en-US'}
    }

    handleClick = ()=> {
        this.setState({ locale: 'bn-BD'})
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>
                    <span>{new Date().toLocaleTimeString(this.state.locale)}</span>
                </h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
