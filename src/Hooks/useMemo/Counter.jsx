import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [idOne, setIdOne] = useState(0);
    const [idTwo, setIdTwo] = useState(0);

    const incrementByOne = ()=> {
        setIdOne((prevState)=> prevState + 1)
    }

    const incrementByTwo = ()=> {
        setIdTwo((prevState)=> prevState + 2)
    }

    const isEven = useMemo(()=> {
        let n = 0;
        while(n < 2000000000){
            n++;
        }
        return idOne % n === 0
    },[idOne])

    return (
        <div>
            <button onClick={incrementByOne}>Increment By One - {idOne}</button>
            <h3>{isEven ? 'Even' : 'Odd'}</h3>
            <hr />
            <button onClick={incrementByTwo}>Increment By Two - {idTwo}</button>
        </div>
    )
}

export default Counter