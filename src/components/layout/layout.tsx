import * as styles from './layout.css'

import { Box, Heading, HiddenVisually, Icon, Link, Logo } from '..'

import NextLink from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <div className={styles.layoutWrapper}>
        <Box
          component="header"
          paddingY="xl"
          display="flex"
          justifyContent="space-between"
        >
          <Logo />
          <button className={styles.hamburgerButton}>
            <HiddenVisually>Navigation Menu</HiddenVisually>
            <Icon icon="hamburger" />
          </button>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NextLink href="/">
                  <a>Home</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/portfolio">
                  <a>Portfolio</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/contact">
                  <a>Contact Me</a>
                </NextLink>
              </li>
            </ul>
          </nav>
        </Box>
        <main>{children}</main>
      </div>
      <footer className={styles.layoutWrapper}>
        <div className={styles.contactSection}>
          <Heading level={2} size={1}>
            Interested in doing a project together?
          </Heading>
          <Link href="/contact" type="secondary">
            <a>Contact Me</a>
          </Link>
        </div>
        <div className={styles.footerLinksSection}>
          <Logo />
          <nav>
            <ul className={styles.footerLinksList}>
              <li>
                <Link href="/" type="text">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" type="text">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" type="text">
                  <a>Contact Me</a>
                </Link>
              </li>
            </ul>
          </nav>
          <ul className={styles.socialLinksList}>
            <li>
              <a href="http://www.github.com" className={styles.socialLink}>
                <HiddenVisually>Github Profile</HiddenVisually>
                <Icon icon="github" />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" className={styles.socialLink}>
                <HiddenVisually>Twitter Profile</HiddenVisually>
                <Icon icon="twitter" />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com" className={styles.socialLink}>
                <HiddenVisually>LinkedIn Profile</HiddenVisually>
                <Icon icon="linkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
