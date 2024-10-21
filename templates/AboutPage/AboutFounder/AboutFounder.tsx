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
        <h1 className="heading">Dynanesh Ingle</h1>
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
      {/* <FounderLine  /> */}
      <svg
        width={940}
        height={353}
        viewBox="0 0 940 353"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="founder-line"
      >
        <path
          d="M687.05 255.62C690.157 258.287 693.28 260.88 696.42 263.4L695.17 265C692.01 262.46 688.87 259.85 685.75 257.17L687.05 255.62Z"
          fill="white"
        />
        <path
          d="M726 284.89C729.42 287.14 732.86 289.31 736.29 291.41L735.29 293.12C731.763 291.04 728.283 288.853 724.85 286.56L726 284.89Z"
          fill="white"
        />
        <path
          d="M813.37 327.29C817.277 328.59 821.144 329.81 824.97 330.95L824.4 332.87C820.56 331.723 816.674 330.493 812.74 329.18L813.37 327.29Z"
          fill="white"
        />
        <path
          d="M790.52 318.83C794.333 320.377 798.12 321.847 801.88 323.24L801.19 325.12C797.41 323.72 793.603 322.24 789.77 320.68L790.52 318.83Z"
          fill="white"
        />
        <path
          d="M746.73 297.59C750.29 299.59 753.86 301.59 757.41 303.43L756.48 305.2C752.907 303.32 749.327 301.363 745.74 299.33L746.73 297.59Z"
          fill="white"
        />
        <path
          d="M884.49 343.38C888.67 343.873 892.72 344.273 896.64 344.58L896.48 346.58C892.54 346.273 888.463 345.87 884.25 345.37L884.49 343.38Z"
          fill="white"
        />
        <path
          d="M860.44 339.63C864.527 340.423 868.527 341.12 872.44 341.72L872.13 343.72C868.19 343.107 864.16 342.407 860.04 341.62L860.44 339.63Z"
          fill="white"
        />
        <path
          d="M939.2 345.29L929.81 352.02L928.68 340.52L939.2 345.29Z"
          fill="white"
        />
        <path
          d="M633.51 205.61C636.503 208.41 639.47 211.203 642.41 213.99L641 215.45L632.1 207.06L633.51 205.61Z"
          fill="white"
        />
        <path
          d="M673.45 243.37C674.944 244.783 676.44 246.173 677.94 247.54L676.59 249C675.084 247.62 673.58 246.223 672.08 244.81L667.66 240.63L669 239.2L673.45 243.37Z"
          fill="white"
        />
        <path
          d="M768.28 308.91C771.973 310.697 775.64 312.41 779.28 314.05L778.47 315.87C774.777 314.23 771.08 312.51 767.38 310.71L768.28 308.91Z"
          fill="white"
        />
        <path
          d="M836.7 334.24C840.7 335.293 844.65 336.26 848.55 337.14L848.1 339.09C844.193 338.203 840.227 337.23 836.2 336.17L836.7 334.24Z"
          fill="white"
        />
        <path
          d="M921 345.43V347.43C917.14 347.48 913 347.43 908.74 347.28L908.81 345.28C913.07 345.44 917.13 345.48 921 345.43Z"
          fill="white"
        />
        <path
          d="M706 270.88C709.266 273.34 712.55 275.727 715.85 278.04L714.7 279.68C711.366 277.353 708.066 274.95 704.8 272.47L706 270.88Z"
          fill="white"
        />
        <path
          d="M651.28 222.38L660.15 230.79L658.77 232.24L649.9 223.84L651.28 222.38Z"
          fill="white"
        />
        <path
          d="M624.59 197.24L623.22 198.7C620.26 195.933 617.283 193.16 614.29 190.38L615.65 188.91C618.643 191.69 621.623 194.467 624.59 197.24Z"
          fill="white"
        />
        <path
          d="M304.16 4.84009C308.16 5.51009 312.16 6.26009 316.16 7.06009L315.76 9.06009C311.76 8.26009 307.76 7.52342 303.76 6.85009L304.16 4.84009Z"
          fill="white"
        />
        <path
          d="M597.63 172.39C600.63 175.13 603.63 177.88 606.63 180.63L605.28 182.1C602.294 179.353 599.294 176.61 596.28 173.87L597.63 172.39Z"
          fill="white"
        />
        <path
          d="M522.85 109.32C526.09 111.813 529.307 114.32 532.5 116.84L531.26 118.41C528.073 115.89 524.863 113.39 521.63 110.91L522.85 109.32Z"
          fill="white"
        />
        <path
          d="M351.81 16.0801C355.723 17.2734 359.613 18.5234 363.48 19.8301L362.83 21.7301C358.99 20.3967 355.123 19.1501 351.23 17.9901L351.81 16.0801Z"
          fill="white"
        />
        <path
          d="M375 23.9299C378.82 25.3566 382.623 26.8366 386.41 28.3699L385.66 30.2199C381.9 28.6999 378.11 27.2199 374.3 25.8099L375 23.9299Z"
          fill="white"
        />
        <path
          d="M560.88 140.1C563.993 142.767 567.09 145.433 570.17 148.1L568.87 149.61C565.79 146.943 562.697 144.297 559.59 141.67L560.88 140.1Z"
          fill="white"
        />
        <path
          d="M542.05 124.49C545.223 127.063 548.376 129.647 551.51 132.24L550.24 133.78C547.113 131.187 543.966 128.607 540.8 126.04L542.05 124.49Z"
          fill="white"
        />
        <path
          d="M328.17 9.67993C332.17 10.6199 336.11 11.6799 340.05 12.6799L339.52 14.6099C335.613 13.5499 331.677 12.5499 327.71 11.6099L328.17 9.67993Z"
          fill="white"
        />
        <path
          d="M419.89 43.52C423.53 45.3467 427.157 47.2167 430.77 49.13L429.83 50.9C426.243 48.9667 422.633 47.1034 419 45.31L419.89 43.52Z"
          fill="white"
        />
        <path
          d="M503.24 94.7C506.574 97.0866 509.86 99.5 513.1 101.94L511.91 103.54C508.637 101.107 505.357 98.7 502.07 96.32L503.24 94.7Z"
          fill="white"
        />
        <path
          d="M441.51 55C445.07 57 448.607 59.0333 452.12 61.1L451.12 62.82C447.613 60.76 444.087 58.7333 440.54 56.74L441.51 55Z"
          fill="white"
        />
        <path
          d="M397.72 33.1201C401.46 34.7601 405.177 36.4468 408.87 38.1801L408 40.0001C404.32 38.2668 400.62 36.6001 396.9 35.0001L397.72 33.1201Z"
          fill="white"
        />
        <path
          d="M462.6 67.4299C466.07 69.5799 469.52 71.7499 472.95 73.9699L471.86 75.6499C468.44 73.4366 465.003 71.2633 461.55 69.1299L462.6 67.4299Z"
          fill="white"
        />
        <path
          d="M579.39 156.1C582.46 158.79 585.5 161.49 588.54 164.2L587.2 165.7C584.18 162.993 581.137 160.293 578.07 157.6L579.39 156.1Z"
          fill="white"
        />
        <path
          d="M483.16 80.7C486.546 82.9666 489.913 85.2733 493.26 87.62L492.12 89.26C488.786 86.9333 485.43 84.6333 482.05 82.36L483.16 80.7Z"
          fill="white"
        />
        <path
          d="M51.7001 91.76L53.3601 92.87C51.0901 96.26 48.9001 99.72 46.8001 103.22L45.0801 102.22C47.2001 98.6733 49.4067 95.1867 51.7001 91.76Z"
          fill="white"
        />
        <path
          d="M194.35 3.66992L194.63 5.66992C192.63 5.95992 190.63 6.25992 188.55 6.58992C186.47 6.91992 184.46 7.26992 182.44 7.58992L182.08 5.58992C184.08 5.20992 186.133 4.85326 188.24 4.51992C190.347 4.18659 192.383 3.90326 194.35 3.66992Z"
          fill="white"
        />
        <path
          d="M12.59 181.93L14.53 182.43C13.5033 186.43 12.5466 190.41 11.66 194.37L9.70996 193.93C10.57 189.943 11.53 185.943 12.59 181.93Z"
          fill="white"
        />
        <path
          d="M66.5799 72L68.0999 73.29C65.4332 76.41 62.8865 79.5967 60.4599 82.85L58.8599 81.65C61.3399 78.41 63.9099 75.18 66.5799 72Z"
          fill="white"
        />
        <path
          d="M7.22012 206L9.22012 206.37C8.45345 210.423 7.75345 214.457 7.12012 218.47L5.12012 218.15C5.74012 214.14 6.44012 210.08 7.22012 206Z"
          fill="white"
        />
        <path
          d="M38.9999 112.93L40.7599 113.88C38.8266 117.48 36.9833 121.123 35.2299 124.81L33.4199 124C35.1866 120.26 37.0466 116.57 38.9999 112.93Z"
          fill="white"
        />
        <path
          d="M83.6498 54.1799L84.9998 55.6399C81.9998 58.4199 79.0932 61.2833 76.2798 64.2299L74.8398 62.8499C77.6698 59.8799 80.6098 56.9999 83.6498 54.1799Z"
          fill="white"
        />
        <path
          d="M218.7 1L218.85 3C214.85 3.3 210.794 3.67333 206.68 4.12L206.47 2.12C210.57 1.68667 214.647 1.31333 218.7 1Z"
          fill="white"
        />
        <path
          d="M170 8.25L170.47 10.19C166.47 11.1833 162.547 12.2633 158.7 13.43L158.12 11.52C162.04 10.3333 166 9.24333 170 8.25Z"
          fill="white"
        />
        <path
          d="M28.3402 135.2L30.1802 135.98C28.5802 139.753 27.0569 143.547 25.6102 147.36L23.7402 146.65C25.1936 142.81 26.7269 138.993 28.3402 135.2Z"
          fill="white"
        />
        <path
          d="M123.86 25.6399L124.8 27.4099C121.16 29.3299 117.62 31.3532 114.18 33.4799L113.13 31.7699C116.61 29.6299 120.187 27.5866 123.86 25.6399Z"
          fill="white"
        />
        <path
          d="M146.43 15.51L147.13 17.38C143.25 18.84 139.473 20.38 135.8 22L135 20.22C138.707 18.5533 142.517 16.9833 146.43 15.51Z"
          fill="white"
        />
        <path
          d="M102.82 38.6001L104 40.2301C100.667 42.6034 97.42 45.0701 94.26 47.6301L93 46.0801C96.1667 43.4934 99.44 41.0001 102.82 38.6001Z"
          fill="white"
        />
        <path
          d="M243.16 0V2C239.16 2 235.103 2.09667 230.99 2.29L230.91 0.29C235 0.12 239.1 0 243.16 0Z"
          fill="white"
        />
        <path
          d="M292.05 3.00011L291.78 5.00011C287.78 4.47344 283.743 4.01011 279.67 3.61011L279.86 1.61011C283.953 2.01677 288.017 2.48011 292.05 3.00011Z"
          fill="white"
        />
        <path
          d="M255.43 0.120117C259.517 0.233451 263.59 0.416784 267.65 0.670117L267.53 2.67012C263.53 2.42345 259.477 2.24345 255.37 2.13012L255.43 0.120117Z"
          fill="white"
        />
        <path
          d="M19.5899 158.28L21.4899 158.91C20.1799 162.8 18.9599 166.7 17.7999 170.61L15.8799 170C17.0399 166.1 18.2765 162.193 19.5899 158.28Z"
          fill="white"
        />
        <path
          d="M5.33996 230.63C4.80996 234.74 4.33996 238.81 3.95996 242.83L1.95996 242.64C2.35996 238.6 2.81996 234.513 3.33996 230.38L5.33996 230.63Z"
          fill="white"
        />
        <path
          d="M2.94004 255.07C2.66004 259.23 2.44337 263.32 2.29004 267.34L0.290039 267.26C0.450039 263.26 0.660039 259.11 0.950039 254.94L2.94004 255.07Z"
          fill="white"
        />
        <path
          d="M2.11006 291.83L0.110059 291.88C0.0100586 287.88 -0.0232747 283.78 0.0100586 279.58H2.01006C2.00339 283.787 2.03673 287.87 2.11006 291.83Z"
          fill="white"
        />
        <path
          d="M3.07014 310.19L1.07014 310.36C0.910137 308.36 0.770137 306.36 0.640137 304.26L2.64014 304.13C2.76014 306.2 2.91014 308.22 3.07014 310.19Z"
          fill="white"
        />
      </svg>
    </section>
  )
}

export default AboutFounder
