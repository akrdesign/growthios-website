import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'
import ContactForm from '../ContactForm'
import CompanyInfo from '../CompanyInfo'

type typeProps = {
  className?: string
}

const GetInTouch = ({ className }: typeProps) => {
  const sectionRef = useRef(null)
  useGSAP(() => {
    const heading = new SplitType('.get__in__touch__section .top__wrapper h1', {
      types: 'words',
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    tl.from('.get__in__touch__section .top__wrapper h3', {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
    })

    tl.from(
      heading.words,
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
      },
      0.5
    )

    tl.from(
      '.get__in__touch__section .top__wrapper p',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
      },
      0.8
    )

    tl.from(
      '.get__in__touch__section .input__wrapper',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
        stagger: { amount: 1 },
      },
      0.8
    )

    tl.from(
      '.get__in__touch__section .contact__form__button',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
      },
      2
    )

    tl.from(
      '.get__in__touch__section .company__info__cover',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
        stagger: { amount: 1 },
      },
      0.8
    )

    tl.from(
      '.get__in__touch__section .company__info__location__button',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
      },
      2
    )

    tl.from(
      '.footer__top__wrapper',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
      },
      2
    )
    tl.from(
      '.footer__bottom__wrapper',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
      },
      2.5
    )
  }, [])
  return (
    <section className="get__in__touch__section" ref={sectionRef}>
      <div className={`top__wrapper ${className}`}>
        <h3>Connect</h3>
        <h1>get in touch</h1>
        <p>
          We&lsquo;re here to answer any questions you may have. Feel free to
          reach out to us.
        </p>
      </div>
      <div className="bottom__wrapper">
        <ContactForm />
        <CompanyInfo />
      </div>
    </section>
  )
}

export default GetInTouch
