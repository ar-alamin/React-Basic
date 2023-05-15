// state & action as object
import React, { useReducer } from 'react'
import styles from './Index.module.css'

const initialState = {
    count: 0
}
const reducer = (currValue, action)=> {
    switch(action.type){
        case 'increment':
            return {count: currValue.count + action.value};
        case 'decrement':
            return {count: currValue.count - action.value};
        default:
            return currValue;
    }
}

export default function ComplexCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className={styles.counter}>
            <h2>Count : {state.count} </h2>
            <div className={styles.btn}>
               <button onClick={()=> dispatch({type:'increment', value:1 })}>Increment</button>
                <button onClick={()=> dispatch({type:'decrement', value:1 })}>Decrement</button> 
            </div>
            
        </div>
    )
}
