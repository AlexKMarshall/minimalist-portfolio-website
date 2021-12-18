import { Icon, Logo } from '..'

import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <header>
        <Logo />
        <button>
          Navigation Menu
          <Icon icon="hamburger" />
        </button>
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
      </header>
      <main>{children}</main>
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
