import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
  return (
    <div>
        <input />
        <button onClick={()=>{
            localStorage.setItem('token','miaohao')
            navigate('/center')
        }}>登录</button>
    </div>
  )
}
