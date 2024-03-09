import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='h-screen w-full relative'>
      <img className='h-[90%] w-[100%] object-cover absolute' src="https://images.pexels.com/photos/17817251/pexels-photo-17817251/free-photo-of-close-up-of-a-green-tree-python.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      <h1 className='text-5xl mt-10 absolute flex items-center justify-center'>User: {userid}</h1>
    </div>
  )
}

export default User
