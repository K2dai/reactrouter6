import React from 'react'
import Myrouter from './router/index'
import Tabbar from './components/Tabbar/Tabbar'

export default function App() {
  return (
    <div>
      <Myrouter>
        <Tabbar></Tabbar>
      </Myrouter>
    </div>
  )
}
