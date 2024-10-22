import { useState } from "react"

export default function Counter(){
    const[count, setCount]= useState(0);

    const handleadd =()=>{
        const newcount = count + 1;
        setCount(newcount)
    }


    return (
        <div>
            <h1>hey there! its a default function</h1>
            <h1>Counter: {count}</h1>
            <button onClick={handleadd}>click here</button>
        </div>
    )
}