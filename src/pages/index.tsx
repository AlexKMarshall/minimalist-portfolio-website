import * as styles from 'src/styles/page.css'

import { Heading, Layout } from 'src/components'

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

      <Layout>
        <Heading level={1}>
          Hey, I’m Alex Spencer and I love building beautiful websites
        </Heading>
        <Link href="#about-me">
          <a>About Me</a>
        </Link>
        <Heading id="about-me" level={2} size={1}>
          About Me
        </Heading>
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
        <Heading level={2} size={1}>
          Interested in doing a project together?
        </Heading>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
      </Layout>
    </>
  )
}

export default Home
