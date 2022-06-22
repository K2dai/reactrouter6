import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
    const params = useParams();
    const navigate = useNavigate()
  return (
    <div>{console.log(params.id)}
        <button onClick={()=>{
            navigate(`/detail/3000`)
        }}>猜你喜欢</button>
    </div>
  )
}
