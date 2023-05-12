import React from 'react'
import Card from './Card'
import Data from '../data.json'
import styles from './Control.module.css'

const Control = () => {
  let items = Data.map((item, index)=> <Card key={index} title={item.title} desc={item.desc} />)
  
  return (
    <div>
        <h1 className={styles.heading}> Learn React </h1>
        {items};
    </div>
  )
}

export default Control