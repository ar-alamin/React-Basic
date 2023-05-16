import React, { useRef } from 'react'

export default function Form() {
    const inputRef = useRef(null);

    const handleClick = ()=> {
        console.log(inputRef, 'input ref');
        inputRef.current.focus();
        // inputRef.current.value = 'abc';
        // console.log(inputRef.current.value);
        // inputRef.current.style.color = 'red';
        inputRef.current.style.display = 'none';

    }

    return (
        <div>
           <input ref={inputRef} type="text" placeholder="enter something..." /> 
           <button onClick={handleClick}>Click Here</button>
        </div>
    )
}
