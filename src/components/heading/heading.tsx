import * as styles from './heading.css'

import { AllHTMLAttributes, ElementType, ReactNode } from 'react'

type HeadingBaseProps = Pick<AllHTMLAttributes<HTMLHeadingElement>, 'id'>

type Props = HeadingBaseProps & {
  level: 1 | 2 | 3
  size?: Props['level']
  children: ReactNode
}

const components: Record<Props['level'], ElementType> = {
  [1]: 'h1',
  [2]: 'h2',
  [3]: 'h3',
}

export function Heading({
  level,
  size = level,
  children,
  ...props
}: Props): JSX.Element {
  const HeadingComponent = components[level]

  return (
    <HeadingComponent className={styles.heading({ size })} {...props}>
      {children}
    </HeadingComponent>
  )
}
