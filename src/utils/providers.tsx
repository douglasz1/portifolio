import React, { useEffect, useState } from 'react'
import { THEME_SETTING_KEY } from './constants'
import { setTheme, THEME } from './set-theme'

export interface IThemeProvider {
  children?: React.ReactNode
}

export function Providers({ children }: IThemeProvider) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const theme = window.localStorage.getItem(THEME_SETTING_KEY) as THEME
    setTheme(theme || THEME.LIGHT)
    setMounted(true)
  }, [])

  return mounted ? <>{children}</> : null
}
