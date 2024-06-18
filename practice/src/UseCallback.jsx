import React, { useCallback, useState, useEffect, useMemo } from "react";

const UseCallback = () => {
  const [counter, setCounter] = useState(0);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  const [name, setName] = useState("");

  const displayName = useCallback(() => {
    return name;
  }, [name]);

  return (
    <div>
      <h1>
        factorial of {counter} is; <span>{result}</span>
      </h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>decrement</button>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
      </div>
      <hr />
      <div>
        <div>
          <label htmlFor="">enter name</label>
        </div>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <DisplayName>name = {displayName} </DisplayName>
        <hr />
      </div>
    </div>
  );
};

const displayName = ({ name }) => {
  console.log("rendered");
  return <p>{`my name is ${name}`}</p>;
};
function factorial(n) {
  let i = 0;
  while (i < 200000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return +1;
  }
  return n * factorial(n - 1);
}

export default UseCallback;
