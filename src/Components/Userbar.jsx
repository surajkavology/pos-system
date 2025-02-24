import React from 'react'
import UserCard from './UserCard'
import Button from './Button'

const Userbar = () => {
  return (
    <>
    <div className='bg-white rounded-10 shadow-xl p-6 flex flex-wrap gap-2 items-center justify-between'>
        <UserCard />   
        <Button/>
    </div>
    </>
  )
}

export default Userbar