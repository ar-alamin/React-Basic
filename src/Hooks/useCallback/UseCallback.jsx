import React, { useCallback, useState } from 'react'
import Title from './Title';
import ShowCount from './ShowCount';
import Button from './Button';

function UseCallback() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(()=> {
        setCount1((prevState)=> prevState + 1)
    },[])

    const incrementByFive = useCallback(()=> {
        setCount2((prevState)=> prevState + 5)
    },[])

    return (
        <div>
            <Title />
            <ShowCount count={count1} title='Counter 1' />
            <Button handleClick={incrementByOne}>Increment By One</Button>
            <hr />
            <ShowCount count={count2} title='Counter 2' />
            <Button handleClick={incrementByFive}>Increment By Five</Button>
        </div>
    )
}

export default UseCallback