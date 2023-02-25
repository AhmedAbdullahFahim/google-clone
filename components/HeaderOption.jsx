import React from 'react'

const HeaderOption = ({ title, Icon, selected }) => {
  return (
    <div
      className={`flex space-x-1 items-center cursor-pointer hover:text-blue-600 border-b-4 border-transparent hover:border-blue-600 pb-3 dark:hover:text-blue-300 dark:hover:border-blue-400 ${
        selected &&
        'text-blue-600 border-blue-600 dark:text-blue-300 dark:border-blue-400'
      }`}
    >
      <Icon className='h-4' />
      <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption
