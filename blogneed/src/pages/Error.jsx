import React from 'react'

export default function Error({message}) {
  return (
    <div>
        <p className='text-red-900 text-5xl font-bold my-5'>Error !!!</p>
        <p className='font-semibold'>Reason : {message}</p>
    </div>
  )
}
