import React from 'react'

const NotificationCard = (props) => {
  return (
    <>
        <div className='notification-bar flex flex-wrap justify-between p-6 bg-white rounded-10 shadow-2xl'>
            <div className='notification-card flex flex-wrap gap-3 items-center'>
                <img src={props.profileImg} alt="user-img"  className='size-[50px]'/>
                <div>
                    <h4 className='text-base font-bold text-black'>{props.username}</h4>
                    <p className='text-base text-theme-gray'>{props.para}</p>
                </div>
            </div>
            <div className='text-base font-semibold text-theme '>
                <p>Yesterday</p>
            </div>
        </div>
    </>
  )
}

export default NotificationCard