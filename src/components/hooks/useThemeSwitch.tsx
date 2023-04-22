import React, { useEffect, useState } from 'react'

export default function useThemeSwitch() {

  const darkThemeQuery = "(prefers-color-scheme: dark)";
  const [colorMode, setColorMode] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkThemeQuery);
    const userPreference = window.localStorage.getItem('themeColor')
    let checkColor = '';

    const handleThemeChange = () => {
      if (userPreference) {
        checkColor = userPreference === "dark" ? "dark" : 'light';
        setColorMode(checkColor);

        if (checkColor === "dark") {
          document.documentElement.classList.add('dark')
        }
        else {
          document.documentElement.classList.remove('dark')
        }
      }
      else {
        checkColor = mediaQuery.matches ? "dark" : 'light'
        setColorMode(checkColor)

        if (checkColor === "dark") {
          document.documentElement.classList.add('dark')
        }
        else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    mediaQuery.addEventListener('change', handleThemeChange)

    return () => mediaQuery.removeEventListener('change', handleThemeChange)
  }, [])

  useEffect(() => {
    if (colorMode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark')
    }
    else {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark')
    }
  }, [colorMode])

  return [colorMode, setColorMode] as const;
}
