import { useState } from "react"

function useCounter() {
    const [count, setCount] = useState(0);

    const handleClick = ()=> {
        setCount((prevState)=> prevState + 1);
    }

    return {count, handleClick};
}

export default useCounter