import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter, allows the second parameter to run on initial render
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect( ()=>{
    if ({value} >= 1):
      document.title = `New Messages(${value})`;
  }, [value])
  return <>
    <h1>{value}</h1>
    <button className = "btn" onClick = {() =>setValue(value+1)}></button>
  </>;
};

export default UseEffectBasics;
