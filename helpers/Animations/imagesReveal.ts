import { gsap } from 'gsap'

const imagesReveal = (trigger: string) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: '30% center',
      end: 'bottom -25%',
      toggleActions: 'play none restart none',
    },
  })

  tl
    .fromTo(trigger, {
      opacity: 0
    }, {
      opacity: 1
    })
    .to(trigger, {
      rotate: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
    }, 0)
}

export { imagesReveal }
