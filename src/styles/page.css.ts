import { style } from '@vanilla-extract/css'
import { themeTokens } from './theme.css'

export const heroWrapper = style({
  position: 'relative',
  aspectRatio: '14 / 10',
})

export const largeStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeTokens.space.l,
})

export const extraLargeStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeTokens.space.xl,
})

export const enourmousStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
})

export const aboutContent = style({
  paddingBlock: themeTokens.space.xl,
  borderBlock: '1px solid hsl(0deg 0% 59%)',
})
