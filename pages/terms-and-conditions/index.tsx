import { Footer, Header } from '@/components/layout'
import useSmoothScroll from '@/hooks/use-smooth-scroll'

export default function TermsAndConditions() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <section className="refund__policy__section">
        <h2>
          Effective Date: <span className="color">22nd march 2023</span>
        </h2>
        <h2>
          Welcome to Growthios! These Terms and Conditions ("Terms") govern your
          use of our website and the services provided by Growthios. By
          accessing or using our website, you agree to be bound by these Terms.
          If you do not agree to these Terms, please refrain from using our
          website or services.
        </h2>

        <h1>Use of Website</h1>
        <ul>
          <li>
            You agree to use the Growthios website for lawful purposes only.
          </li>
          <li>
            Unauthorized use of this website may give rise to a claim for
            damages and/or be a criminal offense.
          </li>
          <li>
            We reserve the right to restrict access to our website at any time
            for maintenance, upgrades, or any other reason.
          </li>
        </ul>

        <h1>Intellectual Property</h1>
        <ul>
          <li>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of Growthios and is protected
            by intellectual property laws.
          </li>
          <li>
            You may not reproduce, distribute, or create derivative works of any
            content on this website without our express written permission.
          </li>
        </ul>

        <h1>Service Availability</h1>
        <ul>
          <li>
            Growthios strives to provide uninterrupted access to our services,
            but we do not guarantee that the website or services will always be
            available.
          </li>
          <li>We may modify or discontinue services without notice.</li>
        </ul>

        <h1>Limitation of Liability</h1>
        <ul>
          <li>
            Growthios will not be liable for any direct, indirect, incidental,
            or consequential damages arising from the use or inability to use
            the website or our services.
          </li>
          <li>
            You agree to indemnify and hold Growthios harmless from any claims
            resulting from your use of our website or breach of these Terms.
          </li>
        </ul>

        <h1>Governing Law</h1>
        <ul>
          <li>
            These Terms shall be governed by and construed in accordance with
            the laws of India. Any disputes arising from these Terms will be
            subject to the exclusive jurisdiction of the courts in Akola,
            Maharashtra.
          </li>
        </ul>
      </section>

      <Footer className="padding-top" />
    </>
  )
}
