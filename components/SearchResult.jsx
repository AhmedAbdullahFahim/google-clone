import Link from 'next/link'

const SearchResult = ({ result }) => {
  return (
    <div key={result.link} className='max-w-xl mb-8'>
      <div className='group'>
        <Link href={result.link} className='text-sm' target='_blank'>
          {result.formattedUrl}
        </Link>
        <Link href={result.link}>
          <h2
            className='truncate text-lg text-blue-800 font-medium group-hover:underline'
            target='_blank'
          >
            {result.title}
          </h2>
        </Link>
      </div>
      <p className='line-clamp-2'>{result.snippet}</p>
    </div>
  )
}

export default SearchResult
