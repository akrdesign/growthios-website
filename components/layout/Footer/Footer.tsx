import { Facebook, Instagram, LinkedIn, Logo } from '@/components/svg'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer__top__wrapper">
        <div className="footer__logo__wrapper">
          <Logo />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Case studies</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div className="social__links__warpper">
          <a href="https://www.facebook.com/Growthios " target='_blank'>
            <Facebook />
          </a>
          <a href="https://www.instagram.com/growthios_/ " target='_blank'>
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/company/growthios/ " target='_blank'>
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className="footer__bottom__wrapper">
        <p>© {new Date().getFullYear()} Growthios. All rights reserved.</p>
        <Link href="">Terms and Conditions</Link>
        <Link href="">Privacy Policy</Link>
        <Link href="">Refund</Link>
      </div>
    </footer>
  )
}

export default Footer
