import React, { useEffect, useState } from 'react'

export default function useThemeSwitch() {

  const darkThemeQuery = "(prefers-color-scheme: dark)";
  const [colorMode, setColorMode] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkThemeQuery);
    const userPreference = window.localStorage.getItem('themeColor')

    console.log(userPreference)

    const handleThemeChange = () => {
      if (userPreference) {
        let checkColor = userPreference === "dark" ? "dark" : 'light';
        setColorMode(checkColor);

        console.log(checkColor)

        if (checkColor === "dark") {
          document.documentElement.classList.add('dark')
        }
        else {
          document.documentElement.classList.remove('dark')
        }
      }
      else {
        let checkColor = mediaQuery.matches ? "dark" : 'light'
        setColorMode(checkColor)

        console.log(checkColor)

        window.localStorage.setItem("themeColor", checkColor)

        if (checkColor === "dark") {
          document.documentElement.classList.add('dark')
        }
        else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    handleThemeChange()

    mediaQuery.addEventListener('change', handleThemeChange)

    return () => mediaQuery.removeEventListener('change', handleThemeChange)
  }, [])

  useEffect(() => {
    if (colorMode) {
      console.log(colorMode)
      if (colorMode === 'dark') {
        window.localStorage.setItem('themeColor', 'dark');
        document.documentElement.classList.add('dark')
      }
      else {
        window.localStorage.setItem('themeColor', 'light');
        document.documentElement.classList.remove('dark')
      }
    }
  }, [colorMode])

  return [colorMode, setColorMode] as const;
}
