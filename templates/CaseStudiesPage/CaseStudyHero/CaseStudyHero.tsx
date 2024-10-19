import { CaseStudyCard } from '@/components/common'
import React from 'react'

const CaseStudyHero = ({ items }) => {
  return (
    <section className="case__study__hero__section">
      <div className="case__study__hero__top">
        <h5 className="badge">Case Studies</h5>
        <h1 className="heading">
          Transforming Visions into Reality A Look at Our Successes
        </h1>
      </div>
      <div className="case__study__hero__bottom">
        <div className="case__studies__wrapper">
          {items.map((item) => (
            <CaseStudyCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudyHero
