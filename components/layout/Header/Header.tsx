import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Button } from '@/components/ui'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const headerRef = useRef(null)
  const router = useRouter()

  useGSAP(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.get__in__touch__section',
    //     start: 'top top',
    //     end: 'top top',
    //     // toggleActions: 'play none restart none',
    //   },
    // })

    // tl.to(headerRef.current, {
    //   opacity: 0,
    //   y: -100,
    //   ease: 'Power2.easeOut',
    //   duration: 1,
    //   // delay: 1,
    // })
  }, [])
  return (
    <header ref={headerRef}>
      <div className="header__wrapper">
        <nav>
          <ul>
            <li>
              <Link className={router.pathname == '/' ? 'active' : ''} href="/">Home</Link>
            </li>
            <li>
              <Link className={router.pathname == '/about-us' ? 'active' : ''} href="/about-us">About us</Link>
            </li>
            <li>
              <Link className={router.pathname == '/case-studies' ? 'active' : ''} href="/case-studies">Case studies</Link>
            </li>
            <li>
              <Link className={router.pathname == '/contact-us' ? 'active' : ''} href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div className="header__button">
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
