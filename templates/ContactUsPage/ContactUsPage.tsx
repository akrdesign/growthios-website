import { GetInTouch } from '@/components/common'
import { Footer, Header } from '@/components/layout'
import Head from 'next/head'
import React from 'react'

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>CONTACT US - GROWTHIOS</title>
        <meta
          name="description"
          content="If you are looking for a specialised real estate marketing agency then Growthios is the best choice for you"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Header />
      <GetInTouch className='margin-top' />
      <Footer />
    </>
  )
}

export default ContactUsPage