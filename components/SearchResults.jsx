import Pagination from './Pagination'
import SearchResult from './SearchResult'

const SearchResults = ({ results }) => {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-500 text-md mb-5 mt-3 dark:text-gray-400'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <SearchResult key={result.link} result={result} />
      ))}
      <Pagination />
    </div>
  )
}

export default SearchResults
