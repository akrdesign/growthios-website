import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { Button } from '@/components/ui'

import CaseStudyCard from '../CaseStudyCard'


const FeaturedCaseStudies = ({items}) => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const heading = new SplitType('.featured__case__studies__top .heading', { types: 'words' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    tl.from(".featured__case__studies__top .badge", {
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

    tl.from(".featured__case__studies__top .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.8)

    tl.from(".featured__case__studies__top .right__wrapper", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    tl.from(".case__studies__bottom__wrapper", {
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
    <section className="featured__case__studies__section" ref={sectionRef}>
      <div className="featured__case__studies__top">
        <div className="left__wrapper">
          <h5 className="badge">Case Studies</h5>
          <h1 className="heading">Discover the latest case studies</h1>
          <p className="description">Stay informed with our case studies.</p>
        </div>
        <div className="right__wrapper">
          <Button>View All</Button>
        </div>
      </div>
      <div className="featured__case__studies__bottom">
        <div className="case__studies__bottom__wrapper">
          {items.map((item) => (
            <CaseStudyCard key={item.id} image={item.image} title={item.title} description={item.description}  />
          ))}

        </div>
      </div>
    </section>
  )
}

export default FeaturedCaseStudies
