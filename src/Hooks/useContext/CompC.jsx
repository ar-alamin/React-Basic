// Grand child component 
import React, { useContext } from 'react'
import {Name, Age} from '../useContext/CompA'

function CompC() {
    const name = useContext(Name);
    const age = useContext(Age);
    return (
        <div>
            <h1>{name} <br /> {age}</h1>
        </div>
    )
}

export default CompC