import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ToggleDarkMode = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <>
      {currentTheme === 'dark' ? (
        <button
          className='bg-transparent rounded-full border-gray-500 border-2 p-2 hover:bg-gray-800'
          onClick={() => setTheme('light')}
        >
          {' '}
          <Image src='/sun.svg' alt='logo' height='20' width='20' />
        </button>
      ) : (
        <button
          className='bg-transparent rounded-full border-gray-400 border-2 p-2 hover:bg-gray-100'
          onClick={() => setTheme('dark')}
        >
          <Image src='/moon.svg' alt='logo' height='20' width='20' />
        </button>
      )}
    </>
  )
}

export default ToggleDarkMode
