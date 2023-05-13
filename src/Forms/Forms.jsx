import React, { Component } from 'react'
import styles from './Forms.module.css'

export default class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'JavaScript',
            text: 'JavaScript is awesome',
            framework: 'React',
            checked: false
        }
    }

    handleChange = (e)=> {
        if(e.target.type === 'text') {
            this.setState({
                title: e.target.value
            });
        } else if(e.target.type === 'textarea') {
            this.setState({
                text: e.target.value
            })
        } else if(e.target.type === 'select-one') {
            this.setState({
                framework: e.target.value
            })
        } else if(e.target.type === 'checkbox') {
            this.setState({
                checked: e.target.checked
            })
        } else{
            console.log('nothing')
        }   
    }
    handleSubmit = (e)=> {
        const {title, text, framework, checked} = this.state;
        e.preventDefault();
        console.log(title, text, framework, checked);
    }

    render() {
        const { title, text, framework, checked } = this.state;
        return (
        <div className={styles.container}>
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Enter title' value={title} onChange={this.handleChange} />
                <br />
                <br />

                <textarea name='text' value={text} onChange={this.handleChange}/>
                <br />
                <br />

                <select value={framework} onChange={this.handleChange}>
                    <option value='React'>React</option>
                    <option value='Vue'>Vue</option>
                </select>
                <br />
                <br />

                <input type='checkbox' checked={checked} onChange={this.handleChange}/>
                <br />
                <br />

                <input type='submit' value='Submit' />
            </form >
        </div>
        )
    }
}
