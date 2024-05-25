import React, { useState } from 'react'

const App = () => {
  const [details,setDetails]= useState({counter:0,name:""})

  
  function increaseCounter() {

  setDetails((prev)=> ({
    ...prev,
    counter:prev.counter+1,
  }));

}

  return (
    <div>
      <input type="text" onChange={e => setName(e.target.value)} />
      <h1>{details.name} has click:{details.counter} times!</h1> 
      <button onClick={increaseCounter}>increase</button>
    </div>
  )
  

}

export default App