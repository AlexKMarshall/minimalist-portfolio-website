import { Icon, Logo } from 'src/components'

import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alex Spencer - Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Alex Spencer, Web Developer"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

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
      <main>
        <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
        <Link href="#about-me">
          <a>About Me</a>
        </Link>
        <h2 id="about-me">About Me</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <Link href="/portfolio">
          <a>Go to Portfolio</a>
        </Link>
        <h2>Interested in doing a project together?</h2>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
      </main>
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

export default Home
