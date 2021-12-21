import * as styles from 'src/styles/home-page.css'

import { Heading, Layout, Link } from 'src/components'

import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import heroImage from 'public/homepage/desktop/image-homepage-hero@2x.jpg'
import profileImage from 'public/homepage/desktop/image-homepage-profile@2x.jpg'

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
        <div className={styles.enourmousStack}>
          <div className={styles.heroSection}>
            <div className={styles.heroImageWrapper}>
              <Image
                src={heroImage}
                alt=""
                priority
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.heroContent}>
              <Heading level={1}>
                Hey, I’m Alex Spencer and I love building beautiful websites
              </Heading>
              <Link href="#about-me">About Me</Link>
            </div>
          </div>
          <article className={styles.article}>
            <Image
              src={profileImage}
              alt=""
              placeholder="blur"
              objectFit="cover"
              objectPosition="75% center"
            />
            <div className={styles.aboutContent}>
              <Heading id="about-me" level={2}>
                About Me
              </Heading>

              <p>
                I’m a junior front-end developer looking for a new role in an
                exciting company. I focus on writing accessible HTML, using
                modern CSS practices and writing clean JavaScript. When writing
                JavaScript code, I mostly use React, but I can adapt to whatever
                tools are required. I’m based in London, UK, but I’m happy
                working remotely and have experience in remote teams. When I’m
                not coding, you’ll find me outdoors. I love being out in nature
                whether that’s going for a walk, run or cycling. I’d love you to
                check out my work.
              </p>
              <Link href="/portfolio" type="secondary">
                Go to Portfolio
              </Link>
            </div>
          </article>
        </div>
      </Layout>
    </>
  )
}

export default Home
