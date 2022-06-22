import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filmitem from '../../components/FilmsItem/Filmitem';

export default function Cinema() {
  const [list, setlist] = useState([])
  useEffect(()=>{
    axios({
      url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1324682',
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"165294070798642513887233"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data.data.films);
      setlist(res.data.data.films);
    }
      )
  },[])
  return (
    <div>
      {
        list.map(item=>
          <Filmitem key={item.filmId} {...item}></Filmitem>)
      }
    </div>
  )
}

