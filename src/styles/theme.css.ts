import { createGlobalTheme } from '@vanilla-extract/css'

export const toneTokens = createGlobalTheme(':root', {
  grayishDarkBlue: 'hsl(245deg 10% 22%)',
  darkBlue: 'hsl(205deg 41% 21%)',
  cyan: 'hsl(167deg 36% 54%)',
  borderGrey: 'hsl(0deg 0% 59%)',
})

export const themeTokens = createGlobalTheme(':root', {
  space: {
    s: '1rem',
    m: '1.25rem',
    l: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3.5rem',
    '4xl': '4.5rem',
  },
})
