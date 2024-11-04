import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { DoubleQuotes, Star } from '@/components/svg'
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

    tl.from('.testimonial__card__container', {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      delay: 1,
    })
  }, [])
  return (
    // <section className="testimonial__section" ref={sectionRef}>
    //   <div className="testimonial__card__container">
    //     <div className="testimonial__card__wrapper">
    //       <div className="testimonial__card__left__wrapper">
    //         <div className="testimonial__client__image">
    //           <Image
    //             src="/images/testimonial/raed-abubaker.webp"
    //             alt=""
    //             fill
    //             sizes="100%"
    //           />
    //         </div>
    //         <h1 className="testimonial__client__name">Mr. Ra’ed Abubaker</h1>
    //         <h3 className="testimonial__client__position">
    //           CIO PSI Real Estate
    //         </h3>
    //       </div>
    //       <div className="testimonial__card__right__wrapper">
    //         <div className="testimonial__client__words">
    //           <DoubleQuotes className="top" />
    //           <p>
    //             Cafen Media helps us to generate 47 qualified leads for our
    //             luxury property in Dubai, 15 Sitevisits and 3 Closures worth
    //             40,00,000 Dirhams (1,08,905 $) I highly recommend Cafen Media to
    //             all real estate companies for their marketing needs.
    //           </p>
    //           <div className="bottom__svg__wrapper">
    //             <DoubleQuotes className="bottom" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="testimonial__section" ref={sectionRef}>
      <div className="testimonial__card__container">
        <Slider>
          {testimonialData.map((item, index) => (
            <div className="testimonial__card__wrapper" key={index}>
            <div className="testimonial__card__left__wrapper">
              <div className="testimonial__client__image">
                <Image
                  src={item.image}
                  alt={item.clientName}
                  fill
                  sizes="100%"
                />
              </div>
              <h1 className="testimonial__client__name">{item.clientName}</h1>
              <h3 className="testimonial__client__position">
                {item.position}
              </h3>
            </div>
            <div className="testimonial__card__right__wrapper">
              <div className="testimonial__client__words">
                <DoubleQuotes className="top" />
                <p>
                  {item.clientWord}
                </p>
                <div className="bottom__svg__wrapper">
                  <DoubleQuotes className="bottom" />
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
