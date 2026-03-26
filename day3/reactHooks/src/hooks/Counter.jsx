
import { useState } from 'react';
function Counter() {
 const [count, setCount] = useState(0)
  function increment(){
    setCount(prevCount=>prevCount + 1);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}
      style={{width: "auto"}}
      >Increment</button>
    </>
  )
}

export default Counter