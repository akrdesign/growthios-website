import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Star } from '@/components/svg'
import { Image } from '@/components/ui'
import { testimonialData } from '@/mocks/index'

import Slider from '../Slider'

const Testimonials = () => {
  const sectionRef = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    tl.from(".testimonial__card__container", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      delay: 1
    })
  }, [])
  return (
    <section className="testimonial__section" ref={sectionRef}>
      <div className="testimonial__card__container">
        <Slider>
          {testimonialData.map((item, index) => (
            <div className="testimonial__card__wrapper" key={index}>
              <div className="rating__container">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
              <div className="testimonial__content">
                <h3>{item.clientWord}</h3>
              </div>
              <div className="testimonial__info__wrapper">
                <div className="client__info__wrapper">
                  <div className="image__wrapper">
                    <Image src={item.image} alt={item.clientName} sizes="100%" fill priority />
                  </div>
                  <div className="client__info">
                    <h1>{item.clientName}</h1>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
