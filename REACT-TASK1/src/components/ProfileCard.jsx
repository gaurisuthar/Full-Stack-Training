import React from 'react'

const ProfileCard = ({name,age,location}) => {
  return (
    <div className='ml-3 border border-gray-700 p-4 rounded-md w-64'>
        <h2 className='text-xl font-bold mb-2'>Name : {name}</h2>
        <p className='text-gray-700'>Age : {age}</p>
        <p className='text-gray-700'>Location : {location}</p>
    </div>
  )
}

export default ProfileCard