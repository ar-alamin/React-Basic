import React, { useRef } from 'react'
import Input from './Input';

export default function Form() {
    const inputRef = useRef(null);

    const handleClick = ()=> {
        inputRef.current.focus();

    }

    return (
        <div>
           <Input ref={inputRef} type="text" placeholder="enter something..." /> 
           <button onClick={handleClick}>Click Here</button>
        </div>
    )
}
