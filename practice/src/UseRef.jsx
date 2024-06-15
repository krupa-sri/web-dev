import React, { useRef, useState, useEffect } from 'react'

const UseRef = () => {
 const [name,setName ] = useState("");
 const [counter,setCounter] = useState(0);

 const inputE1=useRef("");
 const previousCounterRef = useRef("");
 console.log(inputE1);

 const resetInput = () => {
    setName("");
    inputE1.current.focus();
    console.log(inputE1.current.value);

 }
 useEffect(() => {

    previousCounterRef.current=counter;
 }, [counter])

  return (
    <div>
        <div>
            <input 
            ref={inputE1}
            type="text"
            name='name'
            autoComplete='off'
            value={name}
            onChange={(e)=> setName(e.target.value)}
             />
             <button onClick={resetInput}>reset</button>
        </div>
        <h1>my name is {name}</h1>
        <h1>random numbers {counter}</h1>
        {typeof previousCounterRef.current!== "undefined" && (
            <h1>previous counter:{previousCounterRef.current}</h1>
        )}
        <button onClick={(e) => setCounter(Math.ceil(Math.random()*100))}>random</button>
    </div>
  )
}

export default UseRef