import * as styles from './layout.css'

import { Heading, HiddenVisually, Icon, Link, Logo } from '..'
import { ReactNode, useRef, useState } from 'react'

import NextLink from 'next/link'

type Props = {
  children: ReactNode
}
export function Layout({ children }: Props): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>
    setIsMenuOpen((currentState) => {
      const nextState = !currentState
      // focus inside the nav menu on opening
      if (nextState && navNodeRef.current) {
        navNodeRef.current.focus()
      }
      return nextState
    })

  const navNodeRef = useRef<HTMLAnchorElement>(null)

  return (
    <>
      <div className={styles.layoutWrapper}>
        <header className={styles.headerWrapper}>
          <NextLink href="/">
            <a>
              <HiddenVisually>Home</HiddenVisually>
              <Logo />
            </a>
          </NextLink>
          <button
            className={styles.hamburgerButton}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <HiddenVisually>Navigation Menu</HiddenVisually>
            {isMenuOpen ? <Icon icon="close" /> : <Icon icon="hamburger" />}
          </button>
          <nav
            className={styles.navigation}
            id="main-navigation"
            onFocus={() => setIsMenuOpen(true)}
            onBlur={() => setIsMenuOpen(false)}
          >
            <ul className={styles.navigationList}>
              <li>
                <Link href="/" type="text" anchorRef={navNodeRef}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" type="text">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" type="text">
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
      <footer className={styles.layoutWrapper}>
        <div className={styles.contactSection}>
          <Heading level={2}>Interested in doing a project together?</Heading>
          <Link href="/contact" type="secondary">
            Contact Me
          </Link>
        </div>
        <div className={styles.footerLinksSection}>
          <div className={styles.footerLinksSectionInner}>
            <Logo />
            <nav>
              <ul className={styles.footerLinksList}>
                <li>
                  <Link href="/" type="text">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" type="text">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" type="text">
                    Contact Me
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
        </div>
      </footer>
    </>
  )
}
