import { Squares2X2Icon } from '@heroicons/react/24/solid'
import Avatar from './Avatar'

const Header = () => {
  return (
    <header className='w-full flex justify-end text-sm py-3 px-5 text-gray-800'>
      <div className='flex items-center space-x-4'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <Squares2X2Icon className='h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer' />
        <Avatar />
      </div>
    </header>
  )
}

export default Header
