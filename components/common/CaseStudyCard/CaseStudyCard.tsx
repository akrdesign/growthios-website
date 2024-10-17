import { Button, Image } from '@/components/ui'
import React from 'react'

const CaseStudyCard = ({ image, title, description }) => {
  const limitedDescription = description.slice(0, 50);

  // Generate Link
  const formattedTitle = title.split(" ").join("-").toLowerCase();
  const exploreLink = `/case-studies/${formattedTitle}`;

  return (
    <div className="case__study__card__container">
      <div className="image__wrapper">
        <Image src={image} alt={title} sizes="100%" fill priority />
      </div>
      <div className="content__wrapper">
        <h1>{title}</h1>
        <p>{`${limitedDescription}...`}</p>
        <Button link={exploreLink}>Read More</Button>
      </div>
    </div>
  )
}

export default CaseStudyCard
