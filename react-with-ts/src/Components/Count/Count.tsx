import React, { useState } from "react";
import "./Count.scss";

const Component = () => {
  let [num, setNum] = useState(Number);

  function handleClick() {
    setNum(num => num + 1)
  }
  return (
    <div aria-posinset={1}>
      <h1>{num}</h1>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default Component;
