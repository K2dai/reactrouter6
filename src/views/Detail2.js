import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
        {console.log(searchParams.get("id"))}
        <button onClick={()=>{
          setSearchParams({id:3000});
        }}>点击变换</button>
    </div>
  )
}
