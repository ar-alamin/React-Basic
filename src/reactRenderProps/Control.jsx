import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import Counter from './Counter'

const Control = () => {
  return (
    <div>
        <Counter>
            {(counter, incrementCount)=> (<ClickCounter count={counter} incrementCount={incrementCount} />)}
        </Counter>

        <Counter>
            {(counter, incrementCount)=> (<HoverCounter count={counter} incrementCount={incrementCount} />)}
        </Counter>
    </div>
  )
}

export default Control