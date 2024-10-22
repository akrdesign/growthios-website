import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { CaseStudyCard } from '@/components/common'

const CaseStudyHero = ({ items }) => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const heading = new SplitType('.case__study__hero__top .heading', { types: 'words' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    tl.from(".case__study__hero__top .badge", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    tl.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    tl.from(".case__studies__wrapper", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 1)

    tl.from(".case__study__card__container:first-child, .case__study__card__container:last-child", {
      rotate: 0,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 2)


  }, [])

  return (
    <section className="case__study__hero__section" ref={sectionRef}>
      <div className="case__study__hero__top">
        <h5 className="badge">Case Studies</h5>
        <h1 className="heading">
          Transforming Visions into Reality A Look at Our Successes
        </h1>
      </div>
      <div className="case__study__hero__bottom">
        <div className="case__studies__wrapper">
          {items.map((item) => (
            <CaseStudyCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudyHero
