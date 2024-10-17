import { GetInTouch } from '@/components/common'
import { Footer, Header } from '@/components/layout'
import Head from 'next/head'
import React from 'react'
import SingleCaseStudy from './SingleCaseStudy'

const SingleCaseStudyPage = ({ caseStudy }) => {
  return (
    <>
      <Head>
        <title>GROWTHIOS - {caseStudy?.title}</title>
        <meta
          name="description"
          content={caseStudy?.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      </Head>
      <Header />
      <SingleCaseStudy caseStudy={caseStudy} />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default SingleCaseStudyPage