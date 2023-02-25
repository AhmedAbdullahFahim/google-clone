import {
  EllipsisVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import HeaderOption from './HeaderOption'

const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-500 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
      <div className='flex space-x-6'>
        <HeaderOption title='All' Icon={MagnifyingGlassIcon} selected />
        <HeaderOption title='Images' Icon={PhotoIcon} />
        <HeaderOption title='Videos' Icon={PlayIcon} />
        <HeaderOption title='News' Icon={NewspaperIcon} />
        <HeaderOption title='Maps' Icon={MapIcon} />
        <HeaderOption title='More' Icon={EllipsisVerticalIcon} />
      </div>
      <div className='flex space-x-8'>
        <p className='hover:text-blue-600 hover:border-blue-600 cursor-pointer border-b-4 border-transparent'>
          Settings
        </p>
        <p className='hover:text-blue-600 hover:border-blue-600 cursor-pointer border-b-4 border-transparent'>
          Tools
        </p>
      </div>
    </div>
  )
}

export default HeaderOptions
