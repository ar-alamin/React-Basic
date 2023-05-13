import React, { Component } from 'react'
import Button from './Button';
import styles from './Conditional.module.css'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { locale: 'bn-BD' }
    }

    handleClick = (locale)=> {
        this.setState({ locale, })
    }

    render() {
        const { locale } = this.state;
        let button;

        if(locale === 'bn-BD') {
            button = (
                <Button change={this.handleClick} locale='en-US' />
            );
        } else {
            button = (
                <Button change={this.handleClick} locale='bn-BD' />
            );
        }

        return (
            <div className={styles.main}>
                <h1> {new Date().toLocaleTimeString(this.state.locale)} </h1>
                {button}             
            </div>
        )
    }
}
