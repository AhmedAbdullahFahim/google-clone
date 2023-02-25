import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MicrophoneIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
import ToggleDarkMode from './ToggleDarkMode'

const SearchHeader = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const router = useRouter()
  const [term, setTerm] = useState('')
  const search = (e) => {
    e.preventDefault()
    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <header className='bg-white top-0 sticky z-10 dark:bg-[#202124]'>
      <div className='grid grid-cols-2 grid-flow-row-dense sm:flex w-full p-6 items-center'>
        <Image
          src={
            currentTheme === 'light'
              ? '/google-logo.png'
              : '/google-white-logo.png'
          }
          alt=''
          width={120}
          height={40}
          className='cursor-pointer mt-2'
          onClick={() => router.push('/')}
        />
        <form className='flex flex-grow ml-10 mr-5 px-6 py-3 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center col-span-2 my-3 sm:my-0 dark:border-gray-600 dark:shadow-none dark:focus-within:bg-[#303134] dark:hover:bg-[#303134]'>
          <input
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='focus:outline-none flex-grow w-full dark:text-[#9aa0a6] dark:bg-transparent'
          />
          {term && (
            <XMarkIcon
              className='h-6 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125'
              onClick={() => setTerm('')}
            />
          )}
          <MicrophoneIcon className='h-5 text-blue-600 hidden sm:inline-flex border-l-2 border-gray-200 pl-3 mr-3 dark:border-gray-700' />
          <MagnifyingGlassIcon className='h-5 text-blue-600 hidden sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            search
          </button>
        </form>
        <div className='flex items-center ml-auto space-x-4'>
          <ToggleDarkMode />
          <Avatar />
        </div>
      </div>
      <HeaderOptions />
    </header>
  )
}

export default SearchHeader
