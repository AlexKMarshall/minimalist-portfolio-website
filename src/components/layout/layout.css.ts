import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { themeTokens, toneTokens } from 'src/styles/theme.css'

const layoutPadding = createVar()

export const layoutWrapper = style({
  display: 'grid',
  gridTemplateColumns: `1fr min(1100px, calc(100% - calc(2 * ${layoutPadding}))) 1fr`,
  columnGap: layoutPadding,

  vars: {
    [layoutPadding]: `clamp(${themeTokens.space.m}, 5vw, ${themeTokens.space['2xl']})`,
  },
})

globalStyle(`${layoutWrapper} > *`, {
  gridColumn: '2 / 3',
})

export const fullBleed = style({
  gridColumn: '1 / -1',
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
  paddingBlock: '6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: themeTokens.space.xl,
  textAlign: 'center',
})

export const footerLinksSection = style([
  fullBleed,
  {
    background: toneTokens.grayishDarkBlue,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: themeTokens.space['2xl'],
    paddingBlock: '3.5rem',
    color: 'white',
  },
])

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
