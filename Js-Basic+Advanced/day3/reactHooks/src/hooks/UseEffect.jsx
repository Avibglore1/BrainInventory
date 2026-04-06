import React from 'react'
import { useState,useEffect } from 'react'
function UseEffect() {
    const [time,setTime] = useState(0);
    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(t=>t+1)
        },1000);
        return ()=>clearInterval(id)
    },[])
  return (
    <div>{time}</div>
  )
}

export default UseEffect