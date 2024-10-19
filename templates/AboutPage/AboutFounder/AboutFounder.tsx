import React from 'react'

import { Image } from '@/components/ui'
import { FounderLine } from '@/components/svg'

const AboutFounder = () => {
  return (
    <section className="about__founder__section">
      <div className="about__founder__image__wrapper">
        <div className="about__founder__image">
          <Image
            src="/images/dnynesh-ingle.webp"
            alt="dnynesh ingle"
            sizes="100%"
            fill
          />
        </div>
        <div className="backdrop"></div>
      </div>
      <div className="about__founder__content__wrapper">
        <h5 className="badge">Founder</h5>
        <h1 className="heading">Dynanesh Ingle</h1>
        <p className="description">
          Dnyanesh’s journey into the world of business began early—at
          just 17 years old, he was already exploring social media marketing and
          content creation. However, he quickly realized that building something
          innovative was only the first step. To truly make an impact, he needed
          to master the art of marketing, particularly in the rapidly evolving
          online landscape.
        </p>
        <p className="description">
          As Dnyanesh honed his marketing skills, he began working with top
          educational institutions and auto detailing studios, helping them
          elevate their brands, reach larger audiences, and generate
          high-quality leads. His success in these industries eventually led him
          to a new challenge: real estate, where building a strong brand
          presence was still uncommon.
        </p>
        <p className="description">
          Transitioning into real estate, Dnyanesh applied his expertise in
          branding, marketing, and sales strategy to new construction projects
          in Navi Mumbai. His impact was immediate and substantial—within just
          two years, his strategies helped real estate clients generate over $9
          million (₹70 crores) in revenue.
        </p>
        <p className="description">
          Aiding developers, channel partners, and sole sellers, his remarkable
          success quickly drew attention. Soon, agents and developers from his
          network sought his guidance to improve their own marketing efforts.
        </p>
        <p className="description">
          Dnyanesh’s path from an inquisitive teenager to a leader in real
          estate highlights his ability to adapt, innovate, and deliver results.
          His story is one of relentless drive, strategic thinking, and a deep
          understanding of how to make an impact in any industry he enters.
        </p>
        <p className="description">
          He’s now on a mission to transform the lives of real estate agents and
          revolutionize the industry itself with his unique Real Estate Beast
          Marketing Framework.
        </p>
      </div>
      <FounderLine className="founder-line" />
    </section>
  )
}

export default AboutFounder
