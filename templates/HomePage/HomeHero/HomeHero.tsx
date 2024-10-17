import gsap from 'gsap'
import SplitType from 'split-type'

import { BlueCircle, HeroLine } from '@/components/svg'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui'
import { LogoMarquee } from '@/components/common'
import {
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  CompanyLogo5,
  CompanyLogo6,
} from '@/components/svg'

const logosArray = [
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  CompanyLogo5,
  CompanyLogo6,
]

const HomeHero = () => {
  useGSAP(() => {
    const heading = new SplitType('.second-child, .first-child', { types: 'words' })

    // gsap.to('.hero__main__heading h1.first-child', {
    //   y: 0,
    //   opacity: 1,
    //   duration: 1.5,
    //   ease: 'Power2.easeOut',
    //   delay: 0.5,
    // })

    gsap.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    gsap.to('.hero__main__heading h1.second-child', {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.8,
    })
  }, [])

  return (
    <>
      <section className="home__hero_section">
        <div className="hero__heading__container">
          <div className="hero__main__heading">
            <h1 className="first-child">Fueling you</h1>
            <h1 className="second-child">Real Estate Growth</h1>
          </div>
          <div className="hero__svg__wrapper">
            <HeroLine />
          </div>
        </div>
        <div className="hero__bottom__wrapper">
          <Button>Get Started</Button>
        </div>
        <div className="hero__description__wrapper">
          <p>
            At Growthios, we build high-converting performance marketing funnels
            that generate high-quality leads for real estate companies.
            Leveraging paid media platforms such as Meta and Google, we
            implement data-driven strategies that turn potential buyers into
            active leads. Our expertise ensures that every campaign delivers
            measurable results for your business.
          </p>
        </div>
        <LogoMarquee logos={logosArray} />
        <BlueCircle className="hero__blue_circle" />
      </section>
    </>
  )
}

export default HomeHero
