import React, { useState } from 'react'
import styles from './Todo.module.css'

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleChange = (e)=> {
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('.js') ? 'You need javaScript skill to complete the task. Do you have it?' : null;

        setTodo(inputValue);
        setWarning(updateWarning);
    }
    return (
        <div className={styles.main}>
           <p>{todo}</p>
           <p>
               <textarea name="todo" value={todo} onChange={handleChange} />
            </p> 
           <hr />
           <h2>{warning || 'Good Choice!'}</h2>
        </div>
    )
}

export default Todo