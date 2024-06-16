import React, { useState,useMemo } from 'react'

const UseMemo = () => {
    const [counter,setCounter] = useState(0);
    const result = useMemo(() => {
        return factorial(counter);
    },[counter]) 
    const [name,setName] = useState("");

  return (
    <div>
        <h1>
            factorial of {counter} is; <span>{result}</span>
        </h1>
        <div>
            <button onClick={()=> setCounter(counter-1)}>decrement</button>
            <button onClick={()=> setCounter(counter+1)}>increment</button>

        </div>
        <hr />
        <div>
            <div>
                <label htmlFor="">enter name</label>
            </div>
            <input 
            type="text" 
            placeholder='enter name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <p>{`my name is ${name}`}</p>
        </div>

    </div>
  )
}
function factorial(n) {
    let i=0;
    while (i<200000000) i++;
    if (n<0) {
        return -1;
    }
    if (n===0) {
        return +1;
    }
    return n*factorial(n-1);
}

export default UseMemo