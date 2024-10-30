import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { Button, Image } from '@/components/ui'

const HomeAbout = () => {
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

    tl.from('.home__about__image__wrapper, .home__about__image__wrapper', {
      opacity: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    })

    tl.from('.home__about__image', {
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
      stagger: 0.1,
    }, "-=2")

    tl.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    tl.from(".home__about__content__wrapper .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.8)
    tl.from(".home__about__button__wrapper", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 1)


  }, [])
  return (
    <section className="home__about__section" ref={sectionRef}>
      <div className="home__about__image__wrapper">
        <div className="home__about__image">
          <Image src="/images/home-about.webp" alt="grothios" sizes="100%" fill />
        </div>
        <div className="backdrop"></div>
      </div>
      <div className="home__about__content__wrapper">
        <h5 className="badge">About us</h5>
        <h1 className="heading">Real Estate Marketing That Converts</h1>
        <p className="description">
          Growthios is a real estate marketing agency that specializes in
          generating high-quality leads through performance marketing. Since
          2023, we’ve partnered with over 26 clients, delivering more than 7,000
          leads, 900 site visits, and ₹55 crores in sales. Our approach focuses
          on optimizing every project across five key parameters of
          Qualification for maximum results.
        </p>
        <div className="home__about__button__wrapper">
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
