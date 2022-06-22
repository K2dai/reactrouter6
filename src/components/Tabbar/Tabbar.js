import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <div className='box'>
      <NavLink to='/films' className={({isactive})=>isactive?'mactive':''}>电影</NavLink>
      <NavLink to='/cinemas' className={({isactive})=>isactive?'mactive':''}>影院</NavLink>
      <NavLink to='/center' className={({isactive})=>isactive?'mactive':''}>个人中心</NavLink>
    </div>
  )
}
