import React from 'react'
import {Outlet} from 'react-router-dom'

export default function Films() {
  return (
    <div>
        <div style={{width:'100%', height:'200px', backgroundColor:'yellow'}}>
            大轮播
        </div>
        <Outlet></Outlet>
    </div>
  )
}
