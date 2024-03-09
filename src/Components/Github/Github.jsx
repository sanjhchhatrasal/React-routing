import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  /*   const [data, setData] = useState([])
    useEffect(() => {
      fetch("https://api.github.com/users/sanjhchhatrasal")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
    }, []) */
    
  return (
    <div className='bg-slate-300 h-[80vh] w-full'>
      <h1 className='text-[2vw] text-center pt-10 font-semibold text-orange-700'>GitHub <span className='text-black'>Account</span></h1>
      <div className=' flex items-center justify-between px-96 pt-14'>
              <img src={data.avatar_url} alt="Git picture" className='w-[10vw] h-[10vw] rounded-full' />
      <h1 className='text-[2vw]'>Followers : {data.followers}</h1>
      <h1 className='text-[2vw]'>Followings : {data.following}</h1>
    </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/sanjhchhatrasal")
  return res.json()
}