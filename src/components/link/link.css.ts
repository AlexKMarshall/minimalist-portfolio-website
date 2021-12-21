import { createVar, style } from '@vanilla-extract/css'
import { themeTokens, toneTokens } from 'src/styles/theme.css'

import { resolveScreenMQ } from 'src/styles/sprinkles.css'

const backgroundColor = createVar()
const textColor = createVar()
const iconColor = createVar()
const borderColor = createVar()

const linkBase = style({
  display: 'inline-flex',
  fontSize: '0.75rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  borderWidth: '1px',
  borderStyle: 'solid',
  backgroundColor,
  color: textColor,
  borderColor,
})

export const primaryLink = style([
  linkBase,
  {
    display: 'inline-flex',
    vars: {
      [iconColor]: toneTokens.cyan,
      [backgroundColor]: toneTokens.darkBlue,
      [textColor]: 'white',
      [borderColor]: 'transparent',
    },
    selectors: {
      '&:hover, &:focus-visible': {
        vars: {
          [iconColor]: 'white',
          [backgroundColor]: toneTokens.cyan,
        },
      },
    },
  },
])

export const linkIcon = style({
  display: 'grid',
  paddingInline: themeTokens.space.s,
  placeItems: 'center',
  backgroundColor: 'hsl(0deg 0% 0% / 10%)',
  color: iconColor,
})

export const linkContent = style({
  paddingBlock: themeTokens.space.s,
  paddingInline: themeTokens.space.xl,
})

export const secondaryLink = style([
  linkBase,
  {
    paddingBlock: themeTokens.space.s,
    paddingInline: themeTokens.space.xl,
    vars: {
      [textColor]: toneTokens.grayishDarkBlue,
      [borderColor]: textColor,
      [backgroundColor]: 'transparent',
    },
    selectors: {
      '&:hover, &:focus-visible': {
        vars: {
          [backgroundColor]: toneTokens.grayishDarkBlue,
          [textColor]: 'hsl(0 0% 98%)',
          [borderColor]: 'transparent',
        },
      },
    },
  },
])

export const textLink = style([
  linkBase,
  {
    paddingBlock: themeTokens.space.s,
    textUnderlineOffset: '0.5em',
    vars: {
      [borderColor]: 'transparent',
      [backgroundColor]: 'transparent',
    },
    selectors: {
      '&:hover, &:focus-visible': {
        textDecoration: 'underline',
      },
      '&[aria-current="page"]': {
        vars: {
          [textColor]: toneTokens.cyan,
        },
      },
    },

    '@media': {
      [resolveScreenMQ.desktop]: {
        paddingBlock: 0,
      },
    },
  },
])
