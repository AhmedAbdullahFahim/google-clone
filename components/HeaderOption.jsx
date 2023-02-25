import React from 'react'

const HeaderOption = ({ title, Icon, selected }) => {
  return (
    <div
      className={`flex space-x-1 items-center cursor-pointer hover:text-blue-600 border-b-4 border-transparent hover:border-blue-600 pb-3 ${
        selected && 'text-blue-600 border-blue-600'
      }`}
    >
      <Icon className='h-4' />
      <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption
