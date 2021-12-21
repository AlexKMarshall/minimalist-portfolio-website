import * as styles from './link.css'

import { AllHTMLAttributes, ReactNode } from 'react'

import { Icon } from '..'
import NextLink from 'next/link'

type LinkType = 'primary' | 'secondary' | 'text'

type Props = LinkInnerProps & {
  type?: LinkType
}

const linkComponents: Record<LinkType, (props: LinkInnerProps) => JSX.Element> =
  {
    primary: PrimaryLink,
    secondary: SecondaryLink,
    text: TextLink,
  }

export function Link({ href, type = 'primary', children }: Props): JSX.Element {
  const LinkComponent = linkComponents[type]
  return <LinkComponent href={href}>{children}</LinkComponent>
}

type LinkInnerProps = AllHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
}

function PrimaryLink({ href, children }: LinkInnerProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a className={styles.primaryLink}>
        <span className={styles.linkIcon}>
          <Icon icon="downArrows" />
        </span>
        <span className={styles.linkContent}>{children}</span>
      </a>
    </NextLink>
  )
}

function SecondaryLink({ href, children }: LinkInnerProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a className={styles.secondaryLink}>{children}</a>
    </NextLink>
  )
}

function TextLink({ href, children }: LinkInnerProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a className={styles.textLink}>{children}</a>
    </NextLink>
  )
}
