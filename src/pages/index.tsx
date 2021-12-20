import * as styles from 'src/styles/page.css'

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
          <div className={styles.extraLargeStack}>
            <div className={styles.largeStack}>
              <div className={styles.heroWrapper}>
                <Image
                  src={heroImage}
                  alt=""
                  priority
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Heading level={1}>
                Hey, I’m Alex Spencer and I love building beautiful websites
              </Heading>
            </div>
            <Link href="#about-me">
              <a>About Me</a>
            </Link>
          </div>
          <div className={styles.extraLargeStack}>
            <Image src={profileImage} alt="" placeholder="blur" />
            <div className={styles.aboutContent}>
              <div
                className={styles.largeStack}
                style={{ alignItems: 'flex-start' }}
              >
                <Heading id="about-me" level={2} size={1}>
                  About Me
                </Heading>

                <p>
                  I’m a junior front-end developer looking for a new role in an
                  exciting company. I focus on writing accessible HTML, using
                  modern CSS practices and writing clean JavaScript. When
                  writing JavaScript code, I mostly use React, but I can adapt
                  to whatever tools are required. I’m based in London, UK, but
                  I’m happy working remotely and have experience in remote
                  teams. When I’m not coding, you’ll find me outdoors. I love
                  being out in nature whether that’s going for a walk, run or
                  cycling. I’d love you to check out my work.
                </p>
                <Link href="/portfolio" type="secondary">
                  <a>Go to Portfolio</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Heading level={2} size={1}>
          Interested in doing a project together?
        </Heading>
        <Link href="/contact" type="secondary">
          <a>Contact Me</a>
        </Link>
      </Layout>
    </>
  )
}

export default Home
