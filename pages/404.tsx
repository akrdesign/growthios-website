import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

import { Button } from '@/components/ui'
import useSmoothScroll from '@/hooks/use-smooth-scroll'
import { useRef } from 'react'

export default function NotFound() {
  useSmoothScroll()

  const sectionRef = useRef(null)

  useGSAP(() => {
    const heading = new SplitType('.not__found__section .heading', { types: 'words' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    tl.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    tl.from(".not__found__section .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.8)
    tl.from(".not__found__button", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 1)


  }, [])

  return (
    <>
      <section className="not__found__section" ref={sectionRef}>
        <h1 className="heading">Page not found</h1>
        <p className="description">
          Oops! The page you&lsquo;re looking for took a detour.
        </p>
        <Button link='/' className='not__found__button'>Back to home</Button>
      </section>
    </>
  )
}
