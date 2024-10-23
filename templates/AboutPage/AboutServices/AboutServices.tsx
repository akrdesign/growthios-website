import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'
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
  const sectionRef = useRef(null)
  useGSAP(() => {
    const heading = new SplitType('.home__about__content__wrapper .heading', { types: 'words' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    tl.from('.about__services__Image__wrapper', {
      opacity: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    })

    tl.from('.about__services__Image', {
      rotate: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    }, 0)

    tl.from(".home__about__content__wrapper .badge", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
    }, "-=2")

    tl.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      stagger: 0.1,
      duration: 1,
    }, 0)

    tl.from(".about___services__points__wrapper", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: {amount: 1},
    }, 0.8)


  }, [])
  return (
    <section className="about__services__section" ref={sectionRef}>
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
