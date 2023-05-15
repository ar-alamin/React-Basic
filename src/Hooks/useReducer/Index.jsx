import React from 'react'
import Counter from './Counter'
import ComplexCounter from './ComplexCounter'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.main}>
        <Counter />
        <ComplexCounter />
    </div>
  )
}

export default Index