import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github()
{
    const data = useLoaderData()
    //    useEffect(()=> {
   // const [data , setdata] = useState([])
//     fetch('https://api.github.com/user/hiteshchoudhary')
//     .then((res)=> res.json())
//     .then( data => setdata(data) )
//    } ,[])

  return (
    <>

    <div>Github followers : {data.followers}
    console.log({data.followers})
    <img src= {data.avatar_url} alt="" />
    </div>
    </>
  )
}

export const githubInfoLoader =  async() => {
    const response = await fetch('https://api.github.com/user/Anand0894')
    return  response.json()
}
