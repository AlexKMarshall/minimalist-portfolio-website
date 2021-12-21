import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { themeTokens, toneTokens } from 'src/styles/theme.css'

import { resolveScreenMQ } from 'src/styles/sprinkles.css'

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

export const headerWrapper = style({
  position: 'relative',
  isolation: 'isolate',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: `clamp(${themeTokens.space.xl}, 6vw, ${themeTokens.space['3xl']})`,
  paddingBottom: `clamp(${themeTokens.space.l}, 4vw, ${themeTokens.space['2xl']})`,
})

export const navigation = style({
  '@media': {
    [resolveScreenMQ.onlyMobile]: {
      transform: 'scale(0)',
      position: 'absolute',
      bottom: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      top: '100%',

      selectors: {
        [`button[aria-expanded="true"] + &`]: {
          transform: 'scale(1)',
        },
      },
    },
  },
})

export const navigationList = style({
  display: 'flex',

  '@media': {
    [resolveScreenMQ.tablet]: {
      flexDirection: 'row',
      gap: themeTokens.space['2xl'],
    },
    [resolveScreenMQ.onlyMobile]: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: toneTokens.grayishDarkBlue,
      paddingBlock: themeTokens.space['2xl'],
      paddingInline: themeTokens.space['4xl'],
      color: 'white',
    },
  },
})

export const hamburgerButton = style({
  border: 'none',
  background: 'none',

  '@media': {
    [resolveScreenMQ.tablet]: {
      display: 'none',
    },
  },
})

export const contactSection = style({
  paddingBlock: '6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: themeTokens.space.xl,
  textAlign: 'center',

  '@media': {
    [resolveScreenMQ.tablet]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'start',

      ':before': {
        content: '',
        display: 'block',
        height: 1,
        backgroundColor: toneTokens.borderGrey,
        flexGrow: 1,
        flexShrink: 1,
      },
    },
  },
})

globalStyle(`${contactSection} > *:first-child`, {
  flexBasis: '350px',
  order: -1,
})

export const footerLinksSection = style([
  fullBleed,
  layoutWrapper,
  {
    background: toneTokens.grayishDarkBlue,
    paddingBlock: themeTokens.space['3xl'],
    color: 'white',

    '@media': {
      [resolveScreenMQ.tablet]: {
        flexDirection: 'row',
        paddingBlock: themeTokens.space.l,
      },
    },
  },
])

export const footerLinksSectionInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: themeTokens.space['2xl'],
  '@media': {
    [resolveScreenMQ.tablet]: {
      flexDirection: 'row',
    },
  },
})

export const footerLinksList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    [resolveScreenMQ.tablet]: {
      flexDirection: 'row',
      gap: themeTokens.space['2xl'],
    },
  },
})

export const socialLinksList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  '@media': {
    [resolveScreenMQ.tablet]: {
      marginLeft: 'auto',
      gap: 0,
    },
  },
})

export const socialLink = style({
  display: 'block',
  padding: '0.75rem',
})
