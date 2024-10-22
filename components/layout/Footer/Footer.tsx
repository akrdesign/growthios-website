import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, LinkedIn } from '@/components/svg'
import { Image } from '@/components/ui'

type footerType = {
  className?: string
}

const Footer = ({ className }: footerType ) => {
  return (
    <footer className={className}>
      <div className="footer__top__wrapper">
        <div className="footer__logo__container">
          <div className="footer__logo__wrapper">
            <Image src='/images/logo.png' alt='growthios logo' sizes='100%' fill />
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/case-studies">Case studies</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
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
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/refund-policy">Refund Policy</Link>
      </div>
    </footer>
  )
}

export default Footer
