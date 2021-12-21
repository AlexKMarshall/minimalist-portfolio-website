import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { themeTokens } from './theme.css'

export const screenSizes = {
  tablet: 768,
  desktop: 1024,
}

export const resolveScreenMQ = {
  onlyMobile: `screen and (max-width: ${screenSizes.tablet - 1}px)`,
  tablet: `screen and (min-width: ${screenSizes.tablet}px)`,
  desktop: `screen and (min-width: ${screenSizes.desktop}px)`,
}

const properties = defineProperties({
  properties: {
    paddingTop: themeTokens.space,
    paddingBottom: themeTokens.space,
    paddingLeft: themeTokens.space,
    paddingRight: themeTokens.space,
    display: ['flex'],
    justifyContent: ['space-between'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
})

export const sprinkles = createSprinkles(properties)
