import React from 'react'
import ContactForm from '../ContactForm'
import CompanyInfo from '../CompanyInfo'

type typeProps = {
  className?: string;
};

const GetInTouch = ({ className }: typeProps) => {
  return (
    <section className="get__in__touch__section">
      <div className={`top__wrapper ${className}`}>
        <h3>Connect</h3>
        <h1>get in touch</h1>
        <p>We&lsquo;re here to answer any questions you may have. Feel free to reach out to us.</p>
      </div>
      <div className="bottom__wrapper">
        <ContactForm />
        <CompanyInfo />
      </div>
    </section>
  )
}

export default GetInTouch