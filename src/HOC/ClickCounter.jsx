import React from 'react'
import withCounter from './withCounter';

const ClickCounter = (props)=> {
    const {count, handleIncrement} = props;
    return (
        <div>
          <button type='button' onClick={handleIncrement}>
            Click {count} times 
          </button>
        </div>
    )
}

export default withCounter(ClickCounter);