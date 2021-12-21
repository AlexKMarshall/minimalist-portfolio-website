import * as styles from 'src/styles/portfolio-page.css'

import { Heading, Layout, Link } from 'src/components'

import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import bookmarkImage from 'public/portfolio/desktop/image-portfolio-bookmark@2x.jpg'
import fyloImage from 'public/portfolio/desktop/image-portfolio-fylo@2x.jpg'
import insureImage from 'public/portfolio/desktop/image-portfolio-insure@2x.jpg'
import manageImage from 'public/portfolio/desktop/image-portfolio-manage@2x.jpg'

const projects: ProjectArticleProps[] = [
  {
    image: manageImage,
    heading: 'Manage',
    textContent: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    href: '/portfolio/manage',
  },
  {
    image: bookmarkImage,
    heading: 'Bookmark',
    textContent: `  This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.`,
    href: '/portfolio/bookmark',
  },
  {
    image: insureImage,
    heading: 'Insure',
    textContent: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.`,
    href: '/portfolio/insure',
  },
  {
    image: fyloImage,
    heading: 'Fylo',
    textContent: `This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.`,
    href: '/portfolio/fylo',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alex Spencer - Web Developer - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Alex Spencer, Web Developer"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Layout>
        <div className={styles.enourmousStack}>
          {projects.map((project, index) => (
            <ProjectArticle
              key={project.heading}
              {...project}
              imagePriority={index === 0}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

type ProjectArticleProps = {
  image: StaticImageData
  heading: string
  textContent: string
  href: string
  imagePriority?: boolean
}
function ProjectArticle({
  image,
  heading,
  textContent,
  href,
  imagePriority,
}: ProjectArticleProps): JSX.Element {
  return (
    <article className={styles.article}>
      <div className={styles.articleImage}>
        <Image src={image} alt="" placeholder="blur" priority={imagePriority} />
      </div>
      <div className={styles.articleContent}>
        <Heading level={2}>{heading}</Heading>

        <p>{textContent}</p>
        <Link href={href} type="secondary">
          View Project
        </Link>
      </div>
    </article>
  )
}

export default Home
