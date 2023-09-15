import React, { useEffect, useState } from 'react'

const DarkMode = () => {
  const [theme, setTheme] = useState()

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? "light" : "dark")
  }

  useEffect(() => {
    if (theme==='dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='absolute top-1/2 -translate-y-1/2 left-8'>
      <button className='dark:text-white' onClick={handleThemeSwitch}><i className='bx bxs-moon text-xl' ></i></button>
    </div>
  )
}

export default DarkMode