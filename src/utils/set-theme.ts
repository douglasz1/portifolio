import { Colors } from '../theme/base'
import * as themes from '../theme'
import { THEME_SETTING_KEY } from './constants'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}

export function setTheme(keyTheme: THEME): void {
  const colors: Colors = themes[keyTheme] || themes.light

  for (const key in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, key)) {
      document.body.style.setProperty(key, colors[key])
    }
  }
  localStorage.setItem(
    THEME_SETTING_KEY,
    themes[keyTheme] ? keyTheme : THEME.LIGHT
  )
}
