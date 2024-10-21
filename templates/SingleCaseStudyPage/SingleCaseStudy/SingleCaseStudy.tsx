

import { PointIcon } from '@/components/svg'
import { Image, Video } from '@/components/ui'
import React from 'react'

const SingleCaseStudy = ({ caseStudy }) => {
  const adsVideo = caseStudy?.content?.adsPresentation?.video
  return (
    <>
      <section className="single__case__study__main__section">
        <div className="single__case__study__image__wrapper">
          <div className="single__case__study__image">
            <div className="image__overlay"></div>
            <Image
              src={caseStudy?.content?.mainHeading?.image}
              alt={caseStudy?.content?.mainHeading?.heading}
              sizes="100%"
              fill
              priority
            />
          </div>
          <div className="backdrop"></div>
          <div className="single__case__study__top">
            <h5 className="badge">Case Study</h5>
            <h1 className="heading">
              {caseStudy?.content?.mainHeading?.heading}
            </h1>
          </div>
        </div>
      </section>
      {caseStudy?.content?.agenda && (
        <section className="case__study__agenda__section">
          <div className="case__study__agenda__top">
            <h1 className="heading">{caseStudy?.content?.agenda?.heading}</h1>
          </div>
          <div className="case__study__agenda__bottom">
          {caseStudy?.content?.agenda?.content.map((item, index) => (
            <div key={index} className={`workflow__card__cover ${!item?.point && "transparent"}`}>
              {item?.point && <PointIcon />}
              <h1>{item?.point}</h1>
            </div>
          ))}
          </div>
        </section>
      )}
      {caseStudy?.content?.introduction && (
        <section className="case__study__introduction__section">
          <div className="case__study__introduction__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.introduction?.heading}</h1>
            <p className="description">
            {caseStudy?.content?.introduction?.content}
            </p>
          </div>
        </section>
      )}
      {caseStudy?.content?.clientOverview && (
        <section className="case__study__clientOverview__section">
          <div className="case__study__clientOverview__image__wrapper">
            <div className="case__study__clientOverview__image">
              <Image src={caseStudy?.content?.clientOverview?.image} alt="growthios" sizes="100%" fill priority />
            </div>
            <div className="backdrop"></div>
          </div>
          <div className="case__study__clientOverview__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.clientOverview?.heading}</h1>
            <p className="description">
            {caseStudy?.content?.clientOverview?.content}
            </p>
          </div>
        </section>
      )}

      {caseStudy?.content?.clientChallenges && (
        <section className="case__study__clientChallenges__section">
          <div className="case__study__clientChallenges__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.clientChallenges?.heading}</h1>
              {caseStudy?.content?.clientChallenges?.content.map((item, index) => (
                <div key={index} className={`case__study__clientChallenges__point case__study__clientChallenges__point__${index+1}`}>
                  {item?.point && <PointIcon />}
                  <h1>{item?.point}</h1>
                </div>
              ))}
          </div>
          <div className="case__study__clientChallenges__image__wrapper">
            <div className="case__study__clientChallenges__image">
              <Image src={caseStudy?.content?.clientChallenges?.image} alt={caseStudy?.content?.clientChallenges?.heading} sizes="100%" fill priority />
            </div>
            <div className="backdrop"></div>
          </div>
        </section>
      )}
      {caseStudy?.content?.joinedHand && (
        <section className="case__study__joinedHand__strategy__section">
          <div className="case__study__joinedHand__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.joinedHand?.heading}</h1>
            <p className="description">
            {caseStudy?.content?.joinedHand?.content}
            </p>
          </div>
          <div className="case__study__strategy__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.strategy?.heading}</h1>
            <p className="description">
            {caseStudy?.content?.strategy?.content}
            </p>
          </div>
        </section>
      )}
      {/* {caseStudy?.content?.strategy && (
        <section className="case__study__strategy__section">
          <div className="case__study__strategy__image__wrapper">
            <div className="case__study__strategy__image">
              <Image src={caseStudy?.content?.strategy?.image} alt="growthios" sizes="100%" fill priority />
            </div>
            <div className="backdrop"></div>
          </div>
          <div className="case__study__strategy__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.strategy?.heading}</h1>
            <p className="description">
            {caseStudy?.content?.strategy?.content}
            </p>
          </div>
        </section>
      )} */}
      {caseStudy?.content?.campaignHighlights && (
        <section className="case__study__campaignHighlights__section">
          <div className="case__study__campaignHighlights__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.campaignHighlights?.heading}</h1>
            {caseStudy?.content?.campaignHighlights.content.map((item, index) => (
              <div className="case__study__campaignHighlights__points__wrapper" key={index}>
                <PointIcon />
                <h1>{item.point.heading}:</h1>
                {typeof item.point.content === 'string' ? (
                  <span>{item.point.content}</span>
                ) : (
                  <ul>
                    {item.point.content.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <span>{subItem.point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {caseStudy?.content?.adsPresentation && (
        <section className="case__study__adsPresentation__section">
          <h1 className="heading">{caseStudy?.content?.adsPresentation?.heading}</h1>
          {caseStudy?.content?.adsPresentation?.video && <Video src={caseStudy?.content?.adsPresentation?.video} />}
        </section>
      )}

      {caseStudy?.content?.achievements && (
        <section className="case__study__achievements__section">
          <h1 className="heading">{caseStudy?.content?.achievements?.heading}</h1>
          <div className="case__study__achievements__image">
            <Image src={caseStudy?.content?.achievements?.image} alt="growthios" sizes="100%" fill priority />
          </div>
          <p className="description">
          {caseStudy?.content?.achievements?.content}
          </p>
        </section>
      )}


    </>
  )
}

export default SingleCaseStudy
