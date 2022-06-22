import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Filmitem(item) {
    const navigate = useNavigate();
  return (
    <div key={item.filmId} onClick={()=>{
        navigate(`/detail/${item.filmId}`)
      }}>
        {item.name}
      </div>
  )
}
