import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'

import { Button } from '@/components/ui'
import { BlueCircle, PointIcon, WorkflowLine } from '@/components/svg'

const workflowData = [
  {
    icons: <PointIcon />,
    title: 'Targeted Campaigns for Maximum ROI',
  },
  {
    icons: <PointIcon />,
    title: 'Turning Clicks into Qualified Leads',
  },
  {
    icons: <PointIcon />,
    title: 'Lead Nurturing Powered by Automation',
  },
  {
    icons: <PointIcon />,
    title: 'Driving Sales Through Data-Driven Strategies',
  },
]

const WorkFlow = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const heading = new SplitType('.workflow__heading', { types: 'words' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
        end: 'top top',
      },
    })

    tl.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    })

    tl.from(
      '.workflow__description',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
        stagger: 0.1,
      },
      0.8
    )

    tl.from(
      '.workflow__button__wrapper',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
      },
      1
    )

    tl.from(
      '.workflow__card__cover',
      {
        opacity: 0,
        y: 100,
        ease: 'Power2.easeOut',
        duration: 1,
        stagger: 0.1,
      },
      0
    )
    tl.to(
      '.workflow__card__cover__1',
      {
        rotate: 2,
        ease: 'Power2.easeOut',
      },
      1
    )
    tl.to(
      '.workflow__card__cover__2',
      {
        rotate: -2,
        ease: 'Power2.easeOut',
      },
      1
    )
    tl.to(
      '.workflow__card__cover__3',
      {
        rotate: 2,
        ease: 'Power2.easeOut',
      },
      1
    )
    tl.to(
      '.workflow__card__cover__4',
      {
        rotate: -2,
        ease: 'Power2.easeOut',
      },
      1
    )
  }, [])
  return (
    <section className="workflow__section" ref={sectionRef}>
      <div className="workflow__left__wrapper">
        <h1 className="workflow__heading">
          Streamlining Success Through Smart Solutions
        </h1>
        <p className="workflow__description">
          We understand your requirements down to the last detail and create a
          tailored, step-by-step plan to meet your objectives. We break down the
          ultimate goal into clear phases and milestones, ensuring smooth
          execution at every stage. Once we plug our proven performance
          marketing funnel into your real estate business, you’ll start seeing
          high-quality leads flowing directly into your lead management system.
          Each lead is warm and ready to convert, setting the stage for rapid
          growth. Our approach ensures that your real estate business thrives
          with consistent, measurable success, turning opportunities into
          long-term value. Let’s transform your business together!
        </p>
        <div className="workflow__button__wrapper">
          <Button>Contact Us</Button>
        </div>
      </div>
      <div className="workflow__right__wrapper">
        {workflowData.map((item, index) => (
          <div
            key={index}
            className={`workflow__card__cover workflow__card__cover__${
              index + 1
            }`}
          >
            <PointIcon />
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      <BlueCircle className="workflow__blue_circle" />
      <WorkflowLine className="workflow__line" />
    </section>
  )
}

export default WorkFlow
