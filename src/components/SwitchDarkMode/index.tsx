import React, { useState } from 'react'
import { THEME_SETTING_KEY } from '../../utils/constants'
import { setTheme, THEME } from '../../utils/set-theme'

import { Icon } from '../Icon'

import { Container } from './styles'

export const SwitchDarkMode = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem(THEME_SETTING_KEY) === THEME.DARK
  )

  const toggle = () => {
    const mode = localStorage.getItem(THEME_SETTING_KEY)
    if (mode === THEME.DARK) {
      setTheme(THEME.LIGHT)
      setIsDark(false)
      return
    }

    setTheme(THEME.DARK)
    setIsDark(true)
  }

  return (
    <Container>
      <input type="checkbox" checked={!!isDark} onChange={toggle} />
      <div className="slider">
        <Icon name="moon" size={28} />
      </div>
    </Container>
  )
}
