import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { PointIcon } from '@/components/svg'
import { Image, Video } from '@/components/ui'
import { ImageModal } from '@/components/common';

const SingleCaseStudy = ({ caseStudy }) => {
  const mainSection = useRef(null)
  const agendaSection = useRef(null)
  const introductionSection = useRef(null)
  const clientOverviewSection = useRef(null)
  const challengesSection = useRef(null)
  const joinedHandSection = useRef(null)
  const campaignHighlightSection = useRef(null)
  const adsPresentationSection = useRef(null)
  const achievementSection = useRef(null)
  const facebookAdsSection = useRef(null)

  useGSAP(() => {
    const mainSectionHeading = new SplitType('.single__case__study__main__section .heading', { types: 'words' })
    const agendaSectionHeading = new SplitType('.case__study__agenda__section .heading', { types: 'words' })
    const introductionSectionHeading = new SplitType('.case__study__introduction__section .heading', { types: 'words' })
    const clientOverviewSectionHeading = new SplitType('.case__study__clientOverview__section .heading', { types: 'words' })
    const challengesSectionHeading = new SplitType('.case__study__clientChallenges__section .heading', { types: 'words' })
    const joinedHandSectionHeading = new SplitType('.case__study__joinedHand__content__wrapper .heading', { types: 'words' })
    const strategySectionHeading = new SplitType('.case__study__strategy__content__wrapper .heading', { types: 'words' })
    const campaignHighlightSectionHeading = new SplitType('.case__study__campaignHighlights__content__wrapper .heading', { types: 'words' })
    const adsPresentationSectionHeading = new SplitType('.case__study__adsPresentation__section .heading', { types: 'words' })
    const achievementSectionHeading = new SplitType('.case__study__achievements__section .heading', { types: 'words' })
    const facebookAdsSectionHeading = new SplitType('.case__study__facebookAds__section .heading', { types: 'words' })

    const mainSectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    mainSectionTl.from('.single__case__study__main__section .single__case__study__image__wrapper', {
      opacity: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    })

    mainSectionTl.from('.single__case__study__main__section .single__case__study__image', {
      rotate: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    }, 0)

    mainSectionTl.from(".single__case__study__main__section .badge", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    mainSectionTl.from(mainSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    mainSectionTl.from(".single__case__study__main__section .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.8)

    // -----------------------------------------------

    const agendaTl = gsap.timeline({
      scrollTrigger: {
        trigger: agendaSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    agendaTl.from(agendaSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    agendaTl.from(".case__study__agenda__section .workflow__card__cover", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: { amount: 1 },
    })

    // -----------------------------------------------

    const introductionTl = gsap.timeline({
      scrollTrigger: {
        trigger: introductionSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    introductionTl.from(introductionSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    introductionTl.from(".case__study__introduction__section .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.8)


    // -----------------------------------------------

    const clientOverviewTl = gsap.timeline({
      scrollTrigger: {
        trigger: clientOverviewSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    clientOverviewTl.from('.case__study__clientOverview__image__wrapper', {
      opacity: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    })

    clientOverviewTl.from('.case__study__clientOverview__image', {
      rotate: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    }, 0)

    clientOverviewTl.from(clientOverviewSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    clientOverviewTl.from(".case__study__clientOverview__content__wrapper .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.8)

    // -----------------------------------------------

    const challengesTl = gsap.timeline({
      scrollTrigger: {
        trigger: challengesSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    challengesTl.from(challengesSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    challengesTl.from(".case__study__clientChallenges__point", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: { amount: 1 },
    }, 0.5)

    challengesTl.from('.case__study__clientChallenges__image__wrapper', {
      opacity: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    }, 0.5)

    challengesTl.from('.case__study__clientChallenges__image', {
      rotate: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    }, 0.5)

    // -----------------------------------------------

    const joinedHandTl = gsap.timeline({
      scrollTrigger: {
        trigger: joinedHandSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    joinedHandTl.from(joinedHandSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    joinedHandTl.from(strategySectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    joinedHandTl.from(".case__study__joinedHand__content__wrapper .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.5)

    joinedHandTl.from(".case__study__strategy__content__wrapper .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0.5)

    // -----------------------------------------------

    const campaignHighlightTl = gsap.timeline({
      scrollTrigger: {
        trigger: campaignHighlightSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    campaignHighlightTl.from(campaignHighlightSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    campaignHighlightTl.from(".case__study__campaignHighlights__points__wrapper", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: {amount: 1},
    })

    // -----------------------------------------------

    const adsPresentationTl = gsap.timeline({
      scrollTrigger: {
        trigger: adsPresentationSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    adsPresentationTl.from(adsPresentationSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    adsPresentationTl.from(".case__study__facebookAds__section .custom__video", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
    })

    adsPresentationTl.from(".case__study__adsPresentation__section img", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: {amount: 0.5}
    })

    // -----------------------------------------------

    const achievementTl = gsap.timeline({
      scrollTrigger: {
        trigger: achievementSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    achievementTl.from(achievementSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    achievementTl.from(".case__study__achievements__image", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
    })

    // -----------------------------------------------

    const facebookAdsTl = gsap.timeline({
      scrollTrigger: {
        trigger: facebookAdsSection.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    facebookAdsTl.from(facebookAdsSectionHeading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    facebookAdsTl.from(".case__study__facebookAds__section img", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: {amount: 0.5}
    })

  }, [])


  return (
    <>
      <section className="single__case__study__main__section" ref={mainSection}>
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
        <section className="case__study__agenda__section" ref={agendaSection}>
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
        <section className="case__study__introduction__section" ref={introductionSection}>
          <div className="case__study__introduction__content__wrapper">
            <h1 className="heading">{caseStudy?.content?.introduction?.heading}</h1>
            <p className="description">
            {caseStudy?.content?.introduction?.content}
            </p>
          </div>
        </section>
      )}
      {caseStudy?.content?.clientOverview && (
        <section className="case__study__clientOverview__section" ref={clientOverviewSection}>
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
        <section className="case__study__clientChallenges__section" ref={challengesSection}>
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
        <section className="case__study__joinedHand__strategy__section" ref={joinedHandSection}>
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
        <section className="case__study__campaignHighlights__section" ref={campaignHighlightSection}>
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
        <section className="case__study__adsPresentation__section" ref={adsPresentationSection}>
          <h1 className="heading">{caseStudy?.content?.adsPresentation?.heading}</h1>
          {caseStudy?.content?.adsPresentation?.video && <Video src={caseStudy?.content?.adsPresentation?.video} />}
          {caseStudy?.content?.adsPresentation?.images && <ImageModal images={caseStudy?.content?.adsPresentation?.images} sectionId="adsPresentation" />}
        </section>
      )}

      {caseStudy?.content?.achievements && (
        <section className="case__study__achievements__section" ref={achievementSection}>
          <h1 className="heading">{caseStudy?.content?.achievements?.heading}</h1>
          <div className="case__study__achievements__image">
            <Image src={caseStudy?.content?.achievements?.image} alt="growthios" sizes="100%" fill priority />
          </div>
          <p className="description">
          {caseStudy?.content?.achievements?.content}
          </p>
        </section>
      )}

      {caseStudy?.content?.facebookAds && (
        <section className="case__study__facebookAds__section" ref={facebookAdsSection}>
          <h1 className="heading">{caseStudy?.content?.facebookAds?.heading}</h1>
          {caseStudy?.content?.facebookAds?.images && <ImageModal images={caseStudy?.content?.facebookAds?.images} sectionId="facebookAds" />}
        </section>
      )}
    </>
  )
}

export default SingleCaseStudy
