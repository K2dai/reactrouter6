import React from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
export default function index(props) {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/films' element={Lazyload('Films')}>
                <Route index element={<Navigate to='/films/nowplaying'/>}></Route>
                <Route path='/films/nowplaying' element={Lazyload('films/Nowplaying')} />
                <Route path='/films/commingsoon' element={Lazyload('films/Commingsoon')} />
            </Route>
            <Route path='/login' element={Lazyload('Login')}/>
            <Route path='/cinemas' element={Lazyload('Cinema')} />
            <Route path='/detail/:id' element={Lazyload('Detail')}/>
            <Route path='/center' element={<Authjudge>
              {Lazyload('Center')}
            </Authjudge>} />
            <Route path='/' element={<Navigate to='films'/>}/>
            <Route path='*' element={Lazyload('Notfound')}/>
        </Routes>
        {props.children}
    </BrowserRouter>
  )
}

function Authjudge({children}){
  const isLogin = localStorage.getItem('token')
  return isLogin?children:<Navigate to='/login'></Navigate>
}

function Lazyload(path){
  const Comp = React.lazy(()=> import(`../views/${path}`));
  return <React.Suspense fallback={<span>加载中</span>}>
    <Comp/>
  </React.Suspense>
}