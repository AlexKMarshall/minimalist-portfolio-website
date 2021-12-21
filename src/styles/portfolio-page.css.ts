import { themeTokens, toneTokens } from './theme.css'

import { resolveScreenMQ } from './sprinkles.css'
import { style } from '@vanilla-extract/css'

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

export const article = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `'image'
                      'text'`,
  gap: themeTokens.space.xl,

  '@media': {
    [resolveScreenMQ.tablet]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateAreas: `'image text'`,
      justifyItems: 'end',

      selectors: {
        '&:nth-child(even)': {
          gridTemplateAreas: `'text image'`,
          justifyItems: 'start',
        },
      },
    },
    [resolveScreenMQ.desktop]: {
      justifyItems: 'center',
    },
  },
})

export const articleImage = style({
  gridArea: 'image',
  position: 'relative',
  alignSelf: 'center',
  width: '100%',
})

export const articleContent = style([
  largeStack,
  {
    gridArea: 'text',
    paddingBlock: themeTokens.space.xl,
    borderBlock: `1px solid ${toneTokens.borderGrey}`,
    justifyContent: 'center',
    alignItems: 'flex-start',

    '@media': {
      [resolveScreenMQ.tablet]: {
        maxWidth: '70%',
      },
    },
  },
])
