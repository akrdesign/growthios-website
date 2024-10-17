import { gsap } from 'gsap'

const textReveal = (trigger: string) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none restart none',
    },
  })

  tl.to(`${trigger} .word`, {
    y: 0,
    duration: 1.5,
    ease: "Power2.easeOut",
    delay: 0.5
  })
}

export { textReveal }
