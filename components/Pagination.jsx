import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Pagination = () => {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0
  return (
    <div className='flex items-center justify-between text-blue-700 mb-10 max-w-lg'>
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
          className='flex items-center flex-grow flex-col cursor-pointer'
        >
          <ChevronLeftIcon className='h-5' />
          <p>Previous</p>
        </Link>
      )}
      <Link
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
        className='flex items-center flex-grow flex-col cursor-pointer'
      >
        <ChevronRightIcon className='h-5' />
        <p>Next</p>
      </Link>
    </div>
  )
}

export default Pagination
