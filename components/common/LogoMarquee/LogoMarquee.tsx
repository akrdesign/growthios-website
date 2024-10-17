import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FC } from 'react'

interface LogoMarqueeProps {
  logos: React.ComponentType[]
}

const LogoMarquee: FC<LogoMarqueeProps> = ({ logos }) => {
  useGSAP(() => {
    const logoWrappers = document.querySelectorAll('.logo__wrapper')

    // Set initial opacity to 1 for all logos
    gsap.set(logoWrappers, { autoAlpha: 1 })

    // Set xPercent based on logo index
    logoWrappers.forEach((logo, i) => {
      gsap.set(logo, { xPercent: 100 * i })
    })

    if (logoWrappers.length > 5) {
      const logosWrap = gsap.utils.wrap(-100, (logoWrappers.length - 1) * 100)
      const duration = logoWrappers.length * 2.5

      gsap.to(logoWrappers, {
        xPercent: `-=${logoWrappers.length * 100}`,
        duration,
        repeat: -1,
        ease: 'none',
        modifiers: {
          xPercent: (xPercent: string) => logosWrap(parseFloat(xPercent)),
        },
      })
    }
  }, [])

  return (
    <div className="companies__logo__container">
      <div className="companies__logo__wrapper">
        <div className="companies__logo__cover">
          {logos.map((LogoComponent, index) => (
            <div className="logo__wrapper" key={index}>
              <div className="logo">
                <LogoComponent />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoMarquee
