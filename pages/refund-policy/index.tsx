import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Footer, Header } from '@/components/layout'
import useSmoothScroll from '@/hooks/use-smooth-scroll'

export default function RefundPolicy() {
  useSmoothScroll()

  useGSAP(() => {
    gsap.from(".refund__policy__section h2", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
      delay: 0.8
    })

    gsap.from(".refund__policy__section h1", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
      delay: 0.8
    })

    gsap.from(".refund__policy__section li", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: { amount: 1 },
      delay: 0.8
    })


  }, [])

  return (
    <>
      <Header />
      <section className="refund__policy__section">
        <h2>Effective Date: <span className='color'>22nd march 2023</span></h2>
        <h2>
          At Growthios, we strive to provide the best services to our clients.
          This Refund Policy outlines the conditions under which refunds may be
          provided.
        </h2>

        <h1>Refund Eligibility</h1>
        <ul>
          <li>
            Refunds are considered on a case-by-case basis, subject to the
            nature of the services rendered and the agreement between Growthios
            and the client.
          </li>
          <li>
            Refunds will not be provided for services that have been fully
            delivered and accepted by the client.
          </li>
          <li>
            In cases where a service is partially completed, a partial refund
            may be issued, depending on the level of completion and the client’s
            satisfaction.
          </li>
        </ul>
        <h1>Process for Requesting a Refund</h1>
        <ul>
          <li>
            To request a refund, clients must submit a written request to
            [Insert Email] within 30 days of receiving the service.
          </li>
          <li>
            The request should include the reason for the refund and any
            supporting evidence that may assist in the review process.
          </li>
        </ul>
        <h1>Refund Approval</h1>
        <ul>
          <li>
            Once a refund request is received, we will evaluate the claim and
            notify you of the approval or rejection within 10 business days.
          </li>
          <li>
            Approved refunds will be processed within 7 business days and will
            be credited back to the original payment method.
          </li>
        </ul>
        <h1>Non-Refundable Services</h1>
        <ul>
          <li>
            Any services that involve a non-recoverable cost (such as
            advertising budgets, third-party fees, etc.) will not be eligible
            for refunds.
          </li>
        </ul>
        <h1>Governing Law</h1>
        <ul>
          <li>
            This Refund Policy is governed by the laws of India, and any
            disputes will be subject to the jurisdiction of the courts in Akola,
            Maharashtra.
          </li>
        </ul>
      </section>
      <Footer className='padding-top' />
    </>
  )
}
