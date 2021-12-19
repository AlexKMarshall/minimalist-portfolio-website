import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

const baseHeading = style({
  fontFamily: `'Ibarra Real Nova', serif`,
})

export const heading = recipe({
  base: baseHeading,

  variants: {
    size: {
      1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '-0.01em',
      },
      2: {},
      3: {},
    },
  },
})
