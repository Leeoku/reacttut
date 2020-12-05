import React, { useState } from 'react';
// component name must be uppercase
// must be in the function/component body 
// cannot call conditionally
const UseStateBasics = () => {
  const [text, setText] = useState('Random Title'); 
  const handleClick = () =>{
    if (text ==="Random Title"){
      setText('HELLO WORLD');
    } else{
      setText('Random Title');
    }
  }
;
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      Change Title
    </button>
  </React.Fragment>
};

export default UseStateBasics;
