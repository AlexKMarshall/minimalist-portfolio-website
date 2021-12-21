import * as styles from './link.css'

import { AllHTMLAttributes, ReactNode, RefObject } from 'react'

import { Icon } from '..'
import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'

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

export function Link({
  href,
  type = 'primary',
  children,
  ...props
}: Props): JSX.Element {
  const LinkComponent = linkComponents[type]
  return (
    <LinkComponent href={href} {...props}>
      {children}
    </LinkComponent>
  )
}

type LinkInnerProps = AllHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
  anchorRef?: RefObject<HTMLAnchorElement>
}

function PrimaryLink({
  href,
  anchorRef,
  children,
}: LinkInnerProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a className={styles.primaryLink} {...(anchorRef && { ref: anchorRef })}>
        <span className={styles.linkIcon}>
          <Icon icon="downArrows" />
        </span>
        <span className={styles.linkContent}>{children}</span>
      </a>
    </NextLink>
  )
}

function SecondaryLink({
  href,
  anchorRef,
  children,
}: LinkInnerProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a
        className={styles.secondaryLink}
        {...(anchorRef && { ref: anchorRef })}
      >
        {children}
      </a>
    </NextLink>
  )
}

function TextLink({ href, anchorRef, children }: LinkInnerProps): JSX.Element {
  const router = useRouter()
  const isCurrentPath = router.pathname === href

  return (
    <NextLink href={href}>
      <a
        className={styles.textLink}
        {...(isCurrentPath && { 'aria-current': 'page' })}
        {...(anchorRef && { ref: anchorRef })}
      >
        {children}
      </a>
    </NextLink>
  )
}
