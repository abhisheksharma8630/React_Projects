import React from 'react'

export default function Sorry({message}) {
  return (
    <div>
        <p className='text-black text-5xl font-bold my-5'>Sorry :( </p>
        <p className='font-semibold'>Reason : {message}</p>
    </div>
  )
}
