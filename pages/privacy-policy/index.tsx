import { Footer, Header } from '@/components/layout'
import useSmoothScroll from '@/hooks/use-smooth-scroll'

export default function PrivacyPolicy() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <section className="refund__policy__section">
        <h2>
          Effective Date: <span className="color">22nd march 2023</span>
        </h2>
        <h2>
          At Growthios, we are committed to protecting the privacy of our
          website visitors and clients. This Privacy Policy outlines how we
          collect, use, and safeguard your personal information.
        </h2>

        <h1>Information We Collect</h1>
        <ul>
          <li>
            We may collect personal information such as your name, email
            address, phone number, and any other details you provide when you
            contact us, fill out forms, or use our services.
          </li>
          <li>
            We also collect non-personal information such as IP addresses,
            browser types, and website usage statistics.
          </li>
        </ul>
        <h1>How We Use Your Information</h1>
        <ul>
          <li>
            Personal information is used to respond to your inquiries, provide
            services, and improve user experience on our website.
          </li>
          <li>
            Non-personal information is used for analytical purposes to enhance
            the functionality and performance of our website.
          </li>
        </ul>
        <h1>Data Sharing</h1>
        <ul>
          <li>
            Growthios does not sell, rent, or trade your personal information
            with third parties.
          </li>
          <li>
            We may share your information with trusted service providers who
            assist in operating our website and providing our services, under
            the condition that they comply with our privacy standards.
          </li>
        </ul>
        <h1>Data Security</h1>
        <ul>
          <li>
            We implement reasonable security measures to protect your personal
            data from unauthorized access, disclosure, or destruction.
          </li>
          <li>
            However, no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee the absolute
            security of your information.
          </li>
        </ul>
        <h1>Your Rights</h1>
        <ul>
          <li>
            You have the right to access, update, or delete your personal
            information at any time. To do so, please contact us at [Insert
            Email].
          </li>
          <li>
            You may also opt-out of receiving marketing communications from us
            by following the instructions provided in those communications.
          </li>
        </ul>
        <h1>Governing Law</h1>
        <ul>
          <li>
            This Privacy Policy is governed by the laws of India, and any
            disputes related to it will be subject to the courts in Akola,
            Maharashtra.
          </li>
        </ul>
      </section>
      <Footer className="padding-top" />
    </>
  )
}
