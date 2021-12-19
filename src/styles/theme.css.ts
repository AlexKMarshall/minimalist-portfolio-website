import { createGlobalTheme } from '@vanilla-extract/css'

export const themeTokens = createGlobalTheme(':root', {
  space: {
    s: '1rem',
    m: '1.25rem',
    l: '1.5rem',
    xl: '2rem',
  },
})
