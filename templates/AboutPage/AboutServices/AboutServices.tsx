import React from 'react'
import { Image } from '@/components/ui'
import { PointIcon } from '@/components/svg'

const services = [
  {
    title: 'Meta Ads',
    description:
      'Advanced targeting and remarketing strategies to reach potential buyers on social media.',
  },
  {
    title: 'Google Ads',
    description:
      'High-performing search and display campaigns for maximum visibility.',
  },
  {
    title: 'WhatsApp & Email Nurturing',
    description:
      'Automated workflows that keep leads engaged and moving down the sales funnel.',
  },
  {
    title: 'Performance Marketing Funnels',
    description:
      'End-to-end funnel optimization to convert traffic into leads.',
  },
]

const AboutServices = () => {
  return (
    <section className="about__services__section">
      <div className="home__about__content__wrapper">
        <h5 className="badge">Services</h5>
        <h1 className="heading">
          Delivering Customized Solutions for All Your Property Needs
        </h1>
        {services.map((item, _) => (
          <div className="about___services__points__wrapper" key={_}>
            <PointIcon />
              <h1>{item.title}: <span>{item.description}</span></h1>
            <div>
            </div>
          </div>
        ))}
      </div>
      <div className="about__services__Image__wrapper">
        <div className="about__services__Image">
          <Image src="/images/home-about.webp" alt="" sizes="100%" fill priority />
        </div>
        <div className="backdrop"></div>
      </div>
    </section>
  )
}

export default AboutServices
