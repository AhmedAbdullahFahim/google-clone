import SearchHeader from '@/components/SearchHeader'
import SearchResults from '@/components/SearchResults'
import response from '@/response'
import Head from 'next/head'
import { useRouter } from 'next/router'

const search = ({ results }) => {
  const router = useRouter()
  console.log(results)
  return (
    <div className='dark:bg-[#202124]'>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <SearchHeader />
      <SearchResults results={results} />
    </div>
  )
}

export default search

export const getServerSideProps = async (context) => {
  const useDummyData = false
  const startIndex = context.query.start || '0'

  const data = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json())

  return {
    props: {
      results: data,
    },
  }
}
