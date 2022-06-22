import React from 'react'
import { BrowserRouter, useRoutes, Navigate} from 'react-router-dom'
export default function index(props) {
  return (
    <BrowserRouter>
        <Myrouter/>
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

function Myrouter(){
    const element = useRoutes([
        {
            path:'/films',
            element:Lazyload('Films'),
            children:[
                {
                path:'',
                element: <Navigate to='/films/Nowplaying'/>
                },
                {
                    path:'/films/Nowplaying',
                    element: Lazyload('films/Nowplaying')
                },
                {
                    path:'/films/Commingsoon',
                    element: Lazyload('films/Commingsoon')
                }
            ]
        },
        {
            path:'/cinemas',
            element:Lazyload('Cinema')
        },
        {
            path:'/center',
            element:<Authjudge>
                {Lazyload('Center')}
            </Authjudge>
        },
        {
            path:'/detail/:id',
            element:Lazyload('Detail')
        },
        {
            path:'/login',
            element:Lazyload('Login')
        },
        {
            path:'/',
            element:<Navigate to='/films'/>
        },
        {
            path:'*',
            element:Lazyload('Notfound')
        }
    ])
    return element
}