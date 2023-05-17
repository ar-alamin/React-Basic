import React from 'react'
import useCounter from './useCounter'

function Count() {
    const {count, handleClick} = useCounter();
    return (
        <div>
            <h2>Custom Hooks Count: {count}</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Count