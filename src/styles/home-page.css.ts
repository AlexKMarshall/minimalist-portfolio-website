import { resolveScreenMQ } from './sprinkles.css'
import { style } from '@vanilla-extract/css'
import { themeTokens } from './theme.css'

export const heroSection = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '33vh',
  gridTemplateAreas: ` 'heroImage'
                        'heroContent'
                        `,
  gap: themeTokens.space.xl,

  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateAreas: `'layer'`,
      gridTemplateRows: '50vh',
    },
  },
})

export const heroImageWrapper = style({
  position: 'relative',
  height: '100%',
  gridArea: 'heroImage',

  '@media': {
    'screen and (min-width: 768px)': {
      gridArea: 'layer',
    },
  },
})

export const heroContent = style({
  isolation: 'isolate',
  gridArea: 'heroContent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: themeTokens.space.l,

  '@media': {
    'screen and (min-width: 768px)': {
      gridArea: 'layer',
      backgroundColor: 'white',
      alignSelf: 'end',
      maxWidth: 'min(75%, 60ch)',
      paddingTop: themeTokens.space['3xl'],
      paddingRight: themeTokens.space['2xl'],
      gap: themeTokens.space['2xl'],
    },
  },
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

export const article = style({
  // display: 'grid',
  // gridTemplateColumns: '1fr',
  // gap: themeTokens.space.xl,

  // '@media': {
  //   [resolveScreenMQ.tablet]: {
  //     gridTemplateColumns: '1fr 50%',
  //     gap: themeTokens.space['3xl'],
  //   },
  //   [resolveScreenMQ.desktop]: {
  //     gridTemplateColumns: '50% 3fr 1fr',
  //     gap: themeTokens.space['3xl'],
  //   },
  // },

  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `'image'
                      'text'`,
  gap: themeTokens.space.xl,

  '@media': {
    [resolveScreenMQ.tablet]: {
      gridTemplateColumns: '1fr 50%',
      gridTemplateAreas: `'image text'`,
      justifyItems: 'end',
    },
    [resolveScreenMQ.desktop]: {
      gridTemplateColumns: '1fr 1fr',

      justifyItems: 'center',
    },
  },
})

export const aboutContent = style([
  largeStack,
  {
    paddingBlock: themeTokens.space.xl,
    borderBlock: '1px solid hsl(0deg 0% 59%)',
    alignItems: 'flex-start',

    '@media': {
      [resolveScreenMQ.desktop]: {
        maxWidth: '70%',
      },
    },
  },
])
