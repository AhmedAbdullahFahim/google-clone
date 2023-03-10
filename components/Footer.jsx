import { GlobeAltIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Footer = () => {
  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500 font-medium dark:bg-[#171717] dark:text-gray-400 dark:divide-gray-700'>
      <div className='px-8 py-3'>
        <p>Egypt</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense'>
        <div className='flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2'>
          <GlobeAltIcon className='h-5 mr-1 text-gray-500 ' /> Carbon neutral
          since 2007
        </div>
        <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className='flex justify-center space-x-8 md:ml-auto'>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
