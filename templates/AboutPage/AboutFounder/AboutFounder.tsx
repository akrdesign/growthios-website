import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { Image } from '@/components/ui'

const AboutFounder = () => {
  const sectionRef = useRef(null)
  useGSAP(() => {
    const heading = new SplitType('.about__founder__content__wrapper .heading', { types: 'words' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top top',
        // toggleActions: 'play none restart none',
      },
    })

    tl.from('.about__founder__image__wrapper', {
      opacity: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    })

    tl.from('.about__founder__image', {
      rotate: 0,
      duration: 1.5,
      ease: 'Power2.easeOut',
      delay: 0.5,
    }, 0)

    tl.from('.founder-line path', {
      opacity: 0,
      duration: 1.5,
      stagger: { amount: 2 },
    }, 0.5)

    tl.from(".about__founder__content__wrapper .badge", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
    }, "-=2")

    tl.from(heading.words, {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: 0.1,
    }, 0)

    tl.from(".about__founder__content__wrapper .description", {
      opacity: 0,
      y: 100,
      ease: 'Power2.easeOut',
      duration: 1,
      stagger: {amount: 1},
    }, 0.8)


  }, [])
  return (
    <section className="about__founder__section" ref={sectionRef}>
      <div className="about__founder__image__wrapper">
        <div className="about__founder__image">
          <Image
            src="/images/dnynesh-ingle.webp"
            alt="dnynesh ingle"
            sizes="100%"
            fill
          />
        </div>
        <div className="backdrop"></div>
      </div>
      <div className="about__founder__content__wrapper">
        <h5 className="badge">Founder</h5>
        <h1 className="heading">Dnyanesh Ingle</h1>
        <p className="description">
          Dnyanesh’s journey into the world of business began early—at just 17
          years old, he was already exploring social media marketing and content
          creation. However, he quickly realized that building something
          innovative was only the first step. To truly make an impact, he needed
          to master the art of marketing, particularly in the rapidly evolving
          online landscape.
        </p>
        <p className="description">
          As Dnyanesh honed his marketing skills, he began working with top
          educational institutions and auto detailing studios, helping them
          elevate their brands, reach larger audiences, and generate
          high-quality leads. His success in these industries eventually led him
          to a new challenge: real estate, where building a strong brand
          presence was still uncommon.
        </p>
        <p className="description">
          Transitioning into real estate, Dnyanesh applied his expertise in
          branding, marketing, and sales strategy to new construction projects
          in Navi Mumbai. His impact was immediate and substantial—within just
          two years, his strategies helped real estate clients generate over $9
          million (₹70 crores) in revenue.
        </p>
        <p className="description">
          Aiding developers, channel partners, and sole sellers, his remarkable
          success quickly drew attention. Soon, agents and developers from his
          network sought his guidance to improve their own marketing efforts.
        </p>
        <p className="description">
          Dnyanesh’s path from an inquisitive teenager to a leader in real
          estate highlights his ability to adapt, innovate, and deliver results.
          His story is one of relentless drive, strategic thinking, and a deep
          understanding of how to make an impact in any industry he enters.
        </p>
        <p className="description">
          He’s now on a mission to transform the lives of real estate agents and
          revolutionize the industry itself with his unique Real Estate Beast
          Marketing Framework.
        </p>
      </div>
      {/* <FounderLine   /> */}
      <svg
        width={798}
        height={400}
        viewBox="0 0 798 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="founder-line"
      >
        <path
          d="M2.19 230.82C2.02 232.6 1.86 234.35 1.73 236.06L0 235.93C0.13 234.2 0.29 232.44 0.47 230.65L2.19 230.82Z"
          fill="white"
        />
        <path
          d="M4.99996 209.73C4.39329 213.323 3.85996 216.82 3.39996 220.22L1.70996 220C2.18329 216.58 2.71996 213.067 3.31996 209.46L4.99996 209.73Z"
          fill="white"
        />
        <path
          d="M9.20001 188.88C8.39001 192.39 7.64001 195.88 6.95001 199.28L5.26001 198.94C5.92668 195.507 6.67668 192.023 7.51001 188.49L9.20001 188.88Z"
          fill="white"
        />
        <path
          d="M14.6101 168.29C13.5901 171.73 12.6367 175.147 11.7501 178.54L10.0801 178.1C10.9734 174.7 11.9267 171.267 12.9401 167.8L14.6101 168.29Z"
          fill="white"
        />
        <path
          d="M21.2301 148.07C20.0101 151.403 18.8568 154.757 17.7701 158.13L16.1201 157.59C17.2201 154.257 18.3801 150.887 19.6001 147.48L21.2301 148.07Z"
          fill="white"
        />
        <path
          d="M29.0999 128.31C27.6699 131.57 26.3099 134.85 25.0099 138.12L23.3899 137.48C24.7232 134.193 26.0966 130.903 27.5099 127.61L29.0999 128.31Z"
          fill="white"
        />
        <path
          d="M38.29 109.14C36.6367 112.28 35.0467 115.447 33.52 118.64L32 117.89C33.5333 114.69 35.13 111.503 36.79 108.33L38.29 109.14Z"
          fill="white"
        />
        <path
          d="M48.8799 90.71C46.9599 93.71 45.1332 96.7466 43.3999 99.82L41.8999 99C43.6732 95.92 45.5099 92.8666 47.4099 89.84L48.8799 90.71Z"
          fill="white"
        />
        <path
          d="M61.0001 73.24C58.8534 76.06 56.7734 78.9266 54.7601 81.84L53.3301 80.84C55.3301 77.9 57.4601 75.02 59.6201 72.17L61.0001 73.24Z"
          fill="white"
        />
        <path
          d="M74.6398 57C72.2332 59.5933 69.8998 62.26 67.6398 65L66.3198 63.89C68.6065 61.1567 70.9698 58.49 73.4098 55.89L74.6398 57Z"
          fill="white"
        />
        <path
          d="M89.9401 42.3C87.2735 44.6133 84.6568 46.9933 82.0901 49.44L80.8901 48.19C83.4568 45.7233 86.0968 43.3233 88.8101 40.99L89.9401 42.3Z"
          fill="white"
        />
        <path
          d="M106.84 29.49C103.88 31.49 101 33.54 98.2002 35.64L97.2002 34.26C100.034 32.1133 102.944 30.0433 105.93 28.05L106.84 29.49Z"
          fill="white"
        />
        <path
          d="M125.19 18.91C122.003 20.4834 118.89 22.15 115.85 23.91L115 22.4C118.067 20.6267 121.217 18.96 124.45 17.4L125.19 18.91Z"
          fill="white"
        />
        <path
          d="M144.77 10.8C141.39 11.9466 138.083 13.19 134.85 14.53L134.19 12.93C137.463 11.5966 140.797 10.34 144.19 9.15997L144.77 10.8Z"
          fill="white"
        />
        <path
          d="M165.26 5.29003C161.754 6.00336 158.307 6.81336 154.92 7.72003L154.47 6.05003C157.877 5.13003 161.357 4.31003 164.91 3.59003L165.26 5.29003Z"
          fill="white"
        />
        <path
          d="M186.25 2.35C182.68 2.64 179.18 3.03001 175.73 3.51L175.49 1.79C178.97 1.31 182.51 0.923338 186.11 0.630005L186.25 2.35Z"
          fill="white"
        />
        <path
          d="M207.55 0.0500012V1.78C205.78 1.78 204.01 1.73 202.23 1.73C200.45 1.73 198.63 1.73 196.85 1.79V0.0600012C198.64 0.0600012 200.45 -0.00999878 202.27 1.21526e-06C204.09 0.0100012 205.77 1.21444e-06 207.55 0.0500012Z"
          fill="white"
        />
        <path
          d="M228.76 1.11997L228.61 2.84997C225.12 2.54997 221.61 2.31997 218.04 2.13997L218.13 0.409973C221.7 0.589973 225.25 0.819973 228.76 1.11997Z"
          fill="white"
        />
        <path
          d="M249.82 3.61L249.56 5.33C246.11 4.8 242.62 4.33 239.11 3.91L239.31 2.19C242.84 2.61 246.35 3.08 249.82 3.61Z"
          fill="white"
        />
        <path
          d="M270.7 7.54997L270.31 9.24997C266.897 8.48331 263.46 7.76997 260 7.10997L260.32 5.40997C263.807 6.06997 267.267 6.78331 270.7 7.54997Z"
          fill="white"
        />
        <path
          d="M291.24 12.93L290.75 14.59C287.416 13.59 284.023 12.64 280.57 11.74L281.01 10.06C284.45 10.96 287.86 11.9167 291.24 12.93Z"
          fill="white"
        />
        <path
          d="M311.36 19.7L310.75 21.32C307.47 20.0933 304.157 18.9167 300.81 17.79L301.36 16.14C304.72 17.28 308.053 18.4667 311.36 19.7Z"
          fill="white"
        />
        <path
          d="M331 27.8L330.29 29.38C327.09 27.9267 323.86 26.53 320.6 25.19L321.26 23.59C324.533 24.9434 327.78 26.3467 331 27.8Z"
          fill="white"
        />
        <path
          d="M350.06 37.13L349.25 38.66C346.137 37.02 342.997 35.4233 339.83 33.87L340.6 32.31C343.78 33.87 346.933 35.4767 350.06 37.13Z"
          fill="white"
        />
        <path
          d="M368.53 47.59L367.64 49.07C364.62 47.25 361.58 45.47 358.52 43.73L359.37 42.22C362.457 43.9733 365.51 45.7633 368.53 47.59Z"
          fill="white"
        />
        <path
          d="M386.39 59.07L385.39 60.5C382.477 58.5 379.54 56.5567 376.58 54.67L377.52 53.21C380.507 55.1234 383.463 57.0767 386.39 59.07Z"
          fill="white"
        />
        <path
          d="M403.62 71.45L402.57 72.83C399.763 70.71 396.93 68.62 394.07 66.56L395.07 65.15C397.95 67.2234 400.8 69.3234 403.62 71.45Z"
          fill="white"
        />
        <path
          d="M420.25 84.63L419.14 86C416.434 83.7533 413.697 81.5367 410.93 79.35L412 78C414.78 80.16 417.53 82.37 420.25 84.63Z"
          fill="white"
        />
        <path
          d="M436.3 98.5L435.14 99.79C432.52 97.43 429.877 95.0966 427.21 92.79L428.35 91.48C431.017 93.8266 433.667 96.1666 436.3 98.5Z"
          fill="white"
        />
        <path
          d="M451.81 113L450.6 114.25C448.067 111.797 445.513 109.37 442.94 106.97L444.12 105.7C446.707 108.093 449.27 110.527 451.81 113Z"
          fill="white"
        />
        <path
          d="M466.82 128L465.57 129.21C463.117 126.683 460.643 124.17 458.15 121.67L459.37 120.45C461.87 122.917 464.353 125.433 466.82 128Z"
          fill="white"
        />
        <path
          d="M481.37 143.38L480.1 144.55C477.71 141.96 475.31 139.37 472.89 136.81L474.15 135.62C476.57 138.193 478.977 140.78 481.37 143.38Z"
          fill="white"
        />
        <path
          d="M495.52 159.17L494.22 160.31C491.9 157.643 489.567 155.003 487.22 152.39L488.52 151.23C490.85 153.87 493.2 156.52 495.52 159.17Z"
          fill="white"
        />
        <path
          d="M509.32 175.27L508 176.38C505.73 173.69 503.45 170.99 501.15 168.31L502.47 167.18C504.763 169.873 507.047 172.57 509.32 175.27Z"
          fill="white"
        />
        <path
          d="M522.81 191.61L521.47 192.7C519.25 189.973 517.017 187.247 514.77 184.52L516.1 183.42C518.35 186.14 520.59 188.88 522.81 191.61Z"
          fill="white"
        />
        <path
          d="M536.07 208.16L534.71 209.23C532.52 206.47 530.33 203.71 528.11 200.95L529.47 199.86C531.677 202.62 533.877 205.387 536.07 208.16Z"
          fill="white"
        />
        <path
          d="M549.12 224.83L547.75 225.9C545.603 223.12 543.437 220.337 541.25 217.55L542.62 216.48C544.8 219.273 546.967 222.057 549.12 224.83Z"
          fill="white"
        />
        <path
          d="M562.07 241.62L560.7 242.68L554.24 234.28L555.61 233.22C557.784 236.033 559.937 238.833 562.07 241.62Z"
          fill="white"
        />
        <path
          d="M574.94 258.44L573.56 259.49C571.433 256.697 569.29 253.893 567.13 251.08L568.51 250.02L574.94 258.44Z"
          fill="white"
        />
        <path
          d="M587.86 275.22L586.5 276.29C585.4 274.91 584.307 273.51 583.22 272.09L580 267.91L581.38 266.85C582.45 268.25 583.52 269.65 584.59 271.03C585.66 272.41 586.77 273.84 587.86 275.22Z"
          fill="white"
        />
        <path
          d="M601.5 291.33L600.21 292.49C597.857 289.89 595.523 287.223 593.21 284.49L594.53 283.37C596.843 286.083 599.167 288.737 601.5 291.33Z"
          fill="white"
        />
        <path
          d="M616.14 306.54L614.93 307.78C612.424 305.333 609.93 302.823 607.45 300.25L608.7 299.05C611.16 301.61 613.64 304.107 616.14 306.54Z"
          fill="white"
        />
        <path
          d="M631.72 320.77L630.59 322.09C627.923 319.81 625.277 317.477 622.65 315.09L623.81 313.81C626.443 316.183 629.08 318.503 631.72 320.77Z"
          fill="white"
        />
        <path
          d="M648.19 334L647.19 335.38C644.39 333.28 641.597 331.113 638.81 328.88L639.89 327.53C642.62 329.72 645.41 331.88 648.19 334Z"
          fill="white"
        />
        <path
          d="M665.47 346.06L664.47 347.51C661.55 345.603 658.623 343.627 655.69 341.58L656.69 340.16C659.637 342.193 662.563 344.16 665.47 346.06Z"
          fill="white"
        />
        <path
          d="M683.52 357L682.67 358.51C679.63 356.79 676.576 355 673.51 353.14L674.41 351.66C677.47 353.54 680.506 355.32 683.52 357Z"
          fill="white"
        />
        <path
          d="M702.22 366.81L701.47 368.37C698.343 366.863 695.187 365.277 692 363.61L692.8 362.08C695.96 363.733 699.1 365.31 702.22 366.81Z"
          fill="white"
        />
        <path
          d="M721.54 375.34L720.9 377C717.667 375.7 714.403 374.323 711.11 372.87L711.81 371.28C715.09 372.7 718.333 374.053 721.54 375.34Z"
          fill="white"
        />
        <path
          d="M741.38 382.55L740.85 384.2C737.557 383.133 734.203 381.98 730.79 380.74L731.38 379.11C734.767 380.37 738.1 381.517 741.38 382.55Z"
          fill="white"
        />
        <path
          d="M761.68 388.32L761.27 390C757.936 389.2 754.503 388.297 750.97 387.29L751.45 385.62C755 386.62 758.37 387.52 761.68 388.32Z"
          fill="white"
        />
        <path
          d="M782.37 392.39L782.12 394.1C778.787 393.62 775.293 393.017 771.64 392.29L771.98 390.59C775.62 391.31 779.083 391.91 782.37 392.39Z"
          fill="white"
        />
        <path d="M798 394.78L789.04 399.24L789.65 389.26L798 394.78Z" fill="white" />
      </svg>

    </section>
  )
}

export default AboutFounder
