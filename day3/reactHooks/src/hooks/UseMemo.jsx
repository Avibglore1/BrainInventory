import { useMemo,useState } from "react";

export default function UseMemo(){
    const [num,setNum] = useState(0);
    const square = useMemo(()=>{
        return num*num
    },[num]);

    return(
        <>
            <p>{square}</p>
            <button onClick={()=>setNum(num+1)}>+</button>
        </>
    )
}

