import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(10);
  function add() {
    return setCounter(counter +1);
  }

  function sub() {
    return setCounter(counter -1);
  }
  function mul() {
return setCounter(counter *10)
  }
  return (
    <div>
      <button onClick={add}>+</button>
      <h1>count={counter}</h1>
      <button onClick={sub}>-</button>
      <button onClick={mul}>x</button>
    </div>
  )
}

export default App