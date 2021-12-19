import { ElementType, ReactNode } from 'react'

import { sprinkles } from 'src/styles/sprinkles.css'

type Sprinkles = Parameters<typeof sprinkles>[0]

type Props = Sprinkles & {
  component?: ElementType
  children: ReactNode
}
export function Box({
  component: Component = 'div',
  children,
  ...props
}: Props): JSX.Element {
  const sprinkleProps: Record<string, unknown> = {}

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinkleProps[key] = props[key as keyof typeof props]
    }
  }

  const sprinkleClassNames = sprinkles(sprinkleProps)

  return <Component className={sprinkleClassNames}>{children}</Component>
}
