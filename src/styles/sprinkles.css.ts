import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { themeTokens } from './theme.css'

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
