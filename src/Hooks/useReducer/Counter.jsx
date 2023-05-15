// state & action as primitive value
import React, { useReducer } from 'react'
import styles from './Index.module.css'

const initialState = 5;
const reducer = (state, action)=> {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state; 
    }
}

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div className={styles.count}>
            <h2>Count - {count} </h2>
            <div className={styles.btn}>
                <button type='button' onClick={()=> dispatch('increment')} >Increment</button>
                <button type='button' onClick={()=> dispatch('decrement')} >Decrement</button>
            </div>
        </div>
    )
}
