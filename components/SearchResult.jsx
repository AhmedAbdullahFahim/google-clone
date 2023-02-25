import Link from 'next/link'

const SearchResult = ({ result }) => {
  return (
    <div key={result.link} className='max-w-xl mb-8'>
      <div className='group'>
        <Link
          href={result.link}
          className='text-sm text-gray-600 dark:text-gray-400'
          target='_blank'
        >
          {result.formattedUrl}
        </Link>
        <Link href={result.link} target='_blank'>
          <h2 className='truncate text-lg text-blue-800 font-medium group-hover:underline dark:text-blue-400'>
            {result.title}
          </h2>
        </Link>
      </div>
      <p className='line-clamp-2 dark:text-gray-300'>{result.snippet}</p>
    </div>
  )
}

export default SearchResult
