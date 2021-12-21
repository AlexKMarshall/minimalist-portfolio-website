import { themeTokens, toneTokens } from 'src/styles/theme.css'

import { style } from '@vanilla-extract/css'

export const layoutWrapper = style({
  paddingInline: themeTokens.space.xl,
  maxWidth: '1100px',
  marginInline: 'auto',
})

export const navigation = style({
  position: 'absolute',
  transform: 'scale(0)',
})

export const hamburgerButton = style({
  border: 'none',
  background: 'none',
})

export const contactSection = style({
  paddingInline: themeTokens.space.xl,
  maxWidth: '1100px',
  marginInline: 'auto',
  paddingBlock: '6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: themeTokens.space.xl,
  textAlign: 'center',
})

export const footerLinksSection = style({
  background: toneTokens.grayishDarkBlue,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: themeTokens.space['2xl'],
  paddingBlock: '3.5rem',
  color: 'white',
})

export const footerLinksList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const socialLinksList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
})

export const socialLink = style({
  display: 'block',
  padding: '0.75rem',
})
