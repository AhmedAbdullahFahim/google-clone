import { Squares2X2Icon } from '@heroicons/react/24/solid'
import Avatar from './Avatar'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Header = ({ currentTheme }) => {
  const { setTheme } = useTheme()
  return (
    <header className='w-full flex justify-end text-sm py-3 px-5 text-gray-800'>
      <div className='flex items-center space-x-4 dark:text-[#9aa0a6]'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        {currentTheme === 'dark' ? (
          <button
            className='bg-transparent rounded-full border-purple-400 border-2 p-2 hover:bg-gray-800'
            onClick={() => setTheme('light')}
          >
            {' '}
            <Image src='/sun.svg' alt='logo' height='20' width='20' />
          </button>
        ) : (
          <button
            className='bg-transparent rounded-full border-purple-400 border-2 p-2 hover:bg-gray-100'
            onClick={() => setTheme('dark')}
          >
            <Image src='/moon.svg' alt='logo' height='20' width='20' />
          </button>
        )}
        <Avatar />
      </div>
    </header>
  )
}

export default Header
