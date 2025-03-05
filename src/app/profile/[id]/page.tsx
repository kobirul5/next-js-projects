import React from 'react'

export default function Id({params}: any) {
  return (
    <div>
      <h2  className='text-2xl text-center mt-20'>Profile Id: <span className='bg-green-500 rounded p-3 text-black'>{params.id}</span></h2>
    </div>
  )
}
