import React from 'react'
import { useState,useCallback } from 'react'
function UseCallback() {
    const [count,setCount] = useState(0);
    const increment = useCallback(()=>{
        setCount(c=>c+1)
    },[])
  return (
    <>
        <div>UseCallback</div>
        <button onClick={increment}>Click {count}</button>
    </>
    
  )
}

export default UseCallback