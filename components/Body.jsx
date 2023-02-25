import Image from 'next/image'
import { CameraIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MicrophoneIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

const Body = () => {
  const searchInputRef = useRef(null)
  const router = useRouter()
  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <form className='flex flex-col items-center flex-1 w-4/5 mt-24'>
      <Image src='/google-logo.png' width={250} height={100} alt='' />
      <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 rounded-full px-4 py-3 items-center sm:max-w-lg lg:max-w-xl'>
        <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500' />
        <input
          type='text'
          className=' flex-1 focus:outline-none px-3'
          ref={searchInputRef}
        />
        <MicrophoneIcon className='h-5  text-blue-600' />
        <CameraIcon className='h-5  ml-3 text-blue-600' />
      </div>
      <div className='flex space-x-4 mt-8 justify-center'>
        <button className='btn' onClick={search}>
          Google Search
        </button>
        <button className='btn'>I'm Feeling Lucky</button>
      </div>
    </form>
  )
}

export default Body
