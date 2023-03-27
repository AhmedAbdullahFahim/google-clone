import { useTheme } from 'next-themes'
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
          <img
            src='/sun.svg'
            alt='logo'
            loading='lazy'
            className='h-[20px] w-[20px]'
          />
        </button>
      ) : (
        <button
          className='bg-transparent rounded-full border-gray-400 border-2 p-2 hover:bg-gray-100'
          onClick={() => setTheme('dark')}
        >
          <img
            src='/moon.svg'
            alt='logo'
            loading='lazy'
            className='h-[20px] w-[20px]'
          />
        </button>
      )}
    </>
  )
}

export default ToggleDarkMode
