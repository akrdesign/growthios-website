import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { Image } from '@/components/ui'

const AboutPageHero = () => {
  useGSAP(() => {
    const heading = new SplitType('.about__hero__content__wrapper .heading', { types: 'words' })

    gsap.from('.about__hero__image__wrapper', {
      opacity: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    })

    gsap.from(".about__hero__image", {
      rotate: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    })

    gsap.from(".about__hero__content__wrapper .badge", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
      delay: 0
    })

    gsap.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
      delay: 0.5
    })

    gsap.from(".about__hero__content__wrapper .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
      delay: 0.8
    })


  }, [])
  return (
    <section className="about__page__hero__section">
      <div className="about__hero__image__wrapper">
        <div className="about__hero__image">
          <Image src="/images/home-about.webp" alt="" sizes="100%" fill />
        </div>
        <div className="backdrop"></div>
      </div>
      <div className="about__hero__content__wrapper">
        <h5 className="badge">About us</h5>
        <h1 className="heading">Your Trusted Partner in Every Real Estate Journey</h1>
        <p className="description">
          Growthios is a leading real estate marketing agency based in Pune,
          helping real estate companies across the world maximise their sales
          through cutting-edge digital marketing strategies. Since our founding
          in 2023, we’ve worked with over 26 clients, generated 7,000+ leads,
          conducted 900+ site visits, and helped drive ₹55 crores in sales. Our
          expertise lies in crafting targeted performance marketing campaigns
          using Meta ads, Google ads, and workflow automation to ensure
          high-quality lead generation.
        </p>
        <p className="description">
          We assess each project on five key parameters : price, possession,
          location, carpet area, and project specifications. This ensures every
          campaign is tailored to attract the right buyers, driving higher
          engagement and sales for our clients.
        </p>
      </div>
    </section>
  )
}

export default AboutPageHero
