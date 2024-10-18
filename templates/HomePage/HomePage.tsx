import Head from 'next/head'

import HomeHero from './HomeHero/HomeHero'
import HomeAbout from './HomeAbout'
import { FeaturedCaseStudies, GetInTouch, Testimonials, WorkFlow } from '@/components/common'
import { getFeaturedCaseStudies } from '@/mocks/case-studies'
import { Footer, Header } from '@/components/layout'

const HomePage = () => {
  const isFeaturedCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      <Head>
        <title>HOME - GROWTHIOS</title>
        <meta
          name="description"
          content="If you are looking for a therapist who is dedicated to your mental and emotional wellness, we invite you to contact us today. Together, we can work towards a brighter, more fulfilling future."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      </Head>
      <Header />
      <HomeHero />
      <HomeAbout />
      <WorkFlow />
      <FeaturedCaseStudies items={isFeaturedCaseStudies} />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default HomePage
