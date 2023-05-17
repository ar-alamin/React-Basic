import React from 'react'
import withCounter from './withCounter';

const ClickCounter = (props)=> {
    const {count, handleIncrement} = props;
    return (
        <div>
          <h1 onMouseOver={handleIncrement}> Click {count} times </h1>
        </div>
    )
}

export default withCounter(ClickCounter);