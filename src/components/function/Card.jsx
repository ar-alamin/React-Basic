import React from 'react'
import styles from './Card.module.css'

function Card(props) {
    const {title, desc} = props;
  
    return (
        <div className={styles.main}>
            <h2 className={styles.title}> {title} </h2>
            <h3 className={styles.description}> {desc} </h3>
            <h4> {new Date().getFullYear()} </h4>
        </div>
    )
}

export default Card