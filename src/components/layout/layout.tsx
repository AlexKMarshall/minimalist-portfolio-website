import * as styles from './layout.css'

import { Box, HiddenVisually, Icon, Logo } from '..'

import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Box paddingX="xl">
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
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact Me</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
        <main>{children}</main>
      </Box>
      <footer>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Me</a>
              </Link>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            <a href="http://www.github.com">
              Github Profile
              <Icon icon="github" />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              Twitter Profile
              <Icon icon="twitter" />
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com">
              LinkedIn Profile
              <Icon icon="linkedIn" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
