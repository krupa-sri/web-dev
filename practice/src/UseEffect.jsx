import React, { useEffect, useState } from "react";


const UseEffect = () => {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("functional components");
  
    useEffect(() => {
      console.log("componented monted or updated");
      const interval = setInterval(showDate, 1000);
      return() =>{
        console.log("cleanup of interval");
        clearInterval();
      }
    },[time]);
    const showDate = () => {
      setTime(new Date().toString());
    };
  
    return (
      <div>
        <div>{time}</div>
        <button onClick={showDate}>Show Date </button>
        <div>{message}</div>
        <button onClick={() => setMessage("changed functional components")}>
          Change Button{" "}
        </button>
      </div>
    );
  };
  

export default UseEffect


