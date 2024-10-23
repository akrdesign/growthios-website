import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Button, Image } from '@/components/ui'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false)

  const headerRef = useRef(null)
  const navWrapperRef = useRef(null)
  const router = useRouter()

  const handleMenuClicked = () => {
    setMenuClicked(!menuClicked)
  }

  useEffect(() => {
    if (menuClicked) {
      // Disable scrolling
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling
      document.body.style.overflow = 'auto'
    }

    // Clean up on unmount or when menuClicked changes
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

    hamburgerTimeline.from(".nav__wrapper ul li", {
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
      <header className='desktop__header' ref={headerRef}>
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
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <header className="mobile__header">
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
        </div>}
      </header>
    </>
  )
}

export default Header
