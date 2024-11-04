import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Button, Image } from '@/components/ui'

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const isBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10

          if (currentScrollY < lastScrollY.current || // Scrolling up
              currentScrollY <= 0 || // At top
              isBottom) { // At bottom
            setIsHidden(false)
          }

          else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsHidden(true)
          }

          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerRef = useRef(null)
  const navWrapperRef = useRef(null)
  const router = useRouter()

  const handleMenuClicked = () => {
    setMenuClicked(!menuClicked)
  }

  useEffect(() => {
    if (menuClicked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuClicked])

  useGSAP(() => {
    const hamburgerTimeline = gsap.timeline({})

    hamburgerTimeline.from(navWrapperRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.5,
      ease: 'Power2.easeOut',
    })

    hamburgerTimeline.from(".nav__wrapper .mobile__menu__link", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: {amount: 1},
    }, 0.5)

    hamburgerTimeline.from(".nav__wrapper .header__button", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: {amount: 1},
    }, 1.5)

    return () => hamburgerTimeline.kill()

  }, [menuClicked])

  return (
    <>
      <header
        className={`desktop__header ${isHidden ? 'hidden' : ''}`}
        ref={headerRef}
      >
        {/* Rest of the header JSX remains the same */}
        <div className="header__wrapper">
          <nav>
            <ul>
              <li>
                <Link className={router.pathname == '/' ? 'active hover-underline-animation-blue' : ' hover-underline-animation-blue'} href="/">Home</Link>
              </li>
              <li>
                <Link className={router.pathname == '/about-us' ? 'active hover-underline-animation-blue' : ' hover-underline-animation-blue'} href="/about-us">About us</Link>
              </li>
              <li>
                <Link className={router.pathname == '/case-studies' ? 'active hover-underline-animation-blue' : ' hover-underline-animation-blue'} href="/case-studies">Case studies</Link>
              </li>
              <li>
                <Link className={router.pathname == '/contact-us' ? 'active hover-underline-animation-blue' : ' hover-underline-animation-blue'} href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </nav>
          <div className="header__logo__wrapper">
            <Image src='/images/logo.png' alt='growthios logo' sizes='100%' fill />
          </div>
          <div className="header__button">
            <Button link='https://calendly.com/dnyaneshingle/real-estate-discovery-call'>Get Started</Button>
          </div>
        </div>
      </header>
      <header className={`mobile__header ${isHidden ? 'hidden' : ''}`}>
        <div className={menuClicked ? "header__wrapper active" : "header__wrapper"}>
          <div className="header__logo__wrapper">
            <Image src='/images/logo.png' alt='growthios logo' sizes='100%' fill />
          </div>
          <div className="hamburger" onClick={handleMenuClicked}>
            <div className={menuClicked ? 'active bars1' : 'bars1'}></div>
            <div className={menuClicked ? 'active bars2' : 'bars2'}></div>
            <div className={menuClicked ? 'active bars3' : 'bars3'}></div>
          </div>
        </div>
        {menuClicked && <div className='nav__wrapper' ref={navWrapperRef}>
          <nav>
            <ul>
              <li>
                <Link className={router.pathname == '/' ? 'active' : 'mobile__menu__link'} href="/">Home</Link>
              </li>
              <li>
                <Link className={router.pathname == '/about-us' ? 'active' : 'mobile__menu__link'} href="/about-us">About us</Link>
              </li>
              <li>
                <Link className={router.pathname == '/case-studies' ? 'active' : 'mobile__menu__link'} href="/case-studies">Case studies</Link>
              </li>
              <li>
                <Link className={router.pathname == '/contact-us' ? 'active' : 'mobile__menu__link'} href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </nav>
          <div className="header__button">
            <Button link='https://calendly.com/dnyaneshingle/real-estate-discovery-call'>Get Started</Button>
          </div>
        </div>}
      </header>
    </>
  )
}

export default Header