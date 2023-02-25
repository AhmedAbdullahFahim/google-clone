import { Squares2X2Icon } from '@heroicons/react/24/solid'
import Avatar from './Avatar'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import ToggleDarkMode from './ToggleDarkMode'

const Header = ({ currentTheme }) => {
  const { setTheme } = useTheme()
  return (
    <header className='w-full flex justify-end text-sm py-3 px-5 text-gray-800'>
      <div className='flex items-center space-x-4 dark:text-[#9aa0a6]'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <ToggleDarkMode />
        <Avatar />
      </div>
    </header>
  )
}

export default Header
