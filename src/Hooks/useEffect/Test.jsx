import React, { useEffect, useState } from 'react'

function Test() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('Alamin');

    useEffect(()=> {
        console.log('ComponentDidMount');
    },[data])

    const handleClicked = ()=> {
        setCount((prevState)=> prevState + 1)
    }

    const updateData = ()=> {
        setData('Abdur Rahman')
    }

    return (
        <div>
            <h1>Clickd {count} times</h1>
            <button onClick={handleClicked}>Clickd</button>
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}

export default Test