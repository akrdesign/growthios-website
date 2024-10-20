import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'

import { Button } from '@/components/ui'
import { BlueCircle, PointIcon } from '@/components/svg'

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
    tl.from(
      '.workflow__line path',
      {
        opacity: 0,
        duration: 1.5,
        stagger: { amount: 2 },
      },
      0.5
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

      <svg
        width={927}
        height={401}
        viewBox="0 0 927 401"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="workflow__line"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M892 395C891.147 396.9 890.29 398.75 889.43 400.55L887.63 399.69C888.477 397.91 889.327 396.074 890.18 394.18L892 395Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M901.33 372.15C899.856 376.103 898.366 379.927 896.86 383.62L895.01 382.86C896.51 379.193 897.99 375.393 899.45 371.46L901.33 372.15Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M909.2 348.78C907.98 352.78 906.723 356.697 905.43 360.53L903.54 359.89C904.82 356.09 906.07 352.18 907.28 348.2L909.2 348.78Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M915.67 325C914.67 329 913.67 333 912.61 336.95L910.68 336.42C911.74 332.52 912.74 328.556 913.68 324.53L915.67 325Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M920.71 300.82C919.99 304.9 919.21 308.937 918.37 312.93L916.37 312.52C917.203 308.52 917.98 304.52 918.7 300.52L920.71 300.82Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M924.23 276.4C923.77 280.514 923.25 284.594 922.67 288.64L920.67 288.35C921.25 284.35 921.767 280.294 922.22 276.18L924.23 276.4Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M926.09 251.8C925.93 255.92 925.693 260.027 925.38 264.12L923.38 263.96C923.693 259.9 923.93 255.82 924.09 251.72L926.09 251.8Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M926.34 239.46H924.34C924.34 235.38 924.27 231.29 924.1 227.2L926.1 227.12C926.27 231.24 926.34 235.35 926.34 239.46Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M925.35 214.8L923.35 214.96C923.016 210.887 922.59 206.823 922.07 202.77L924.07 202.52C924.59 206.6 925.016 210.693 925.35 214.8Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M922.17 190.31L920.17 190.66C919.45 186.66 918.63 182.66 917.71 178.66L919.71 178.21C920.63 182.23 921.45 186.263 922.17 190.31Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M916.57 166.26L914.65 166.82C913.51 162.9 912.26 159.014 910.9 155.16L912.79 154.49C914.163 158.377 915.423 162.3 916.57 166.26Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M908.33 143L906.48 143.78C904.9 140.033 903.2 136.327 901.38 132.66L903.17 131.77C905.01 135.45 906.73 139.193 908.33 143Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M897.32 120.85L895.59 121.85C893.59 118.35 891.4 114.85 889.11 111.48L890.78 110.36C893.08 113.813 895.26 117.31 897.32 120.85Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M883.56 100.32L882 101.54C879.526 98.3398 876.933 95.1931 874.22 92.0998L875.72 90.7798C878.46 93.9131 881.073 97.0931 883.56 100.32Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M867.24 81.7698L865.83 83.1798C862.97 80.3265 859.99 77.5331 856.89 74.7998L858.21 73.2998C861.35 76.0598 864.35 78.8798 867.24 81.7698Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M848.67 65.4101L847.44 67.0001C844.28 64.5401 840.997 62.1368 837.59 59.7901L838.72 58.1401C842.16 60.5068 845.476 62.9301 848.67 65.4101Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M828.38 51.43L827.38 53.14C825.607 52.0733 823.813 51.0267 822 50C820.22 49 818.43 48 816.65 47L817.65 45.25C819.45 46.2367 821.247 47.2367 823.04 48.25C824.833 49.2633 826.613 50.3233 828.38 51.43Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M806.83 39.4901L805.92 41.2701C802.26 39.3967 798.593 37.6034 794.92 35.8901L795.77 34.0801C799.463 35.8134 803.15 37.6167 806.83 39.4901Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M784.63 29.0802L783.84 30.9202C780.093 29.3069 776.336 27.7735 772.57 26.3202L773.29 24.4502C777.096 25.9235 780.876 27.4669 784.63 29.0802Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M761.78 20.2099L761.12 22.0999C757.273 20.7666 753.42 19.4966 749.56 18.2899L750.15 16.3799C754.05 17.5799 757.927 18.8565 761.78 20.2099Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M738.4 13.0002L737.87 14.9302C733.93 13.8568 729.99 12.8568 726.05 11.9302L726.51 9.93018C730.47 10.8702 734.433 11.8935 738.4 13.0002Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M714.54 7.31988L714.15 9.31988C710.15 8.51988 706.15 7.78988 702.15 7.12988L702.48 5.12988C706.513 5.79655 710.533 6.52655 714.54 7.31988Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M690.37 3.32018L690.11 5.32018C686.11 4.78684 682.076 4.32351 678.01 3.93018L678.21 1.93018C682.263 2.32351 686.316 2.78684 690.37 3.32018Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M666 0.909785L665.86 2.90979C661.8 2.64312 657.74 2.43312 653.68 2.27979L653.76 0.279785C657.84 0.426452 661.92 0.636452 666 0.909785Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M641.52 0V2C637.46 2 633.397 2.03 629.33 2.09V0.09C633.377 0.03 637.44 0 641.52 0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M617.14 2.54004C613.08 2.74004 609.023 2.99337 604.97 3.30004L604.82 1.30004C608.886 1.00004 612.946 0.746706 617 0.540039L617.14 2.54004Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M592.82 4.37988C588.78 4.79322 584.743 5.25322 580.71 5.75988L580.46 3.75988C584.507 3.24655 588.56 2.78655 592.62 2.37988L592.82 4.37988Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M568.63 7.42016C564.63 8.02016 560.63 8.66349 556.63 9.35016L556.29 7.35016C560.29 6.68349 564.32 6.03682 568.38 5.41016L568.63 7.42016Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M544.58 11.54C540.58 12.3134 536.58 13.1234 532.58 13.97L532.16 11.97C536.16 11.1167 540.16 10.3067 544.16 9.54004L544.58 11.54Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M520.72 16.6302C516.76 17.5435 512.807 18.5002 508.86 19.5002L508.37 17.5602C512.33 16.5602 516.297 15.6002 520.27 14.6802L520.72 16.6302Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M497.05 22.5701C493.117 23.6301 489.197 24.7168 485.29 25.8301L484.74 23.9101C488.66 22.7901 492.59 21.7001 496.53 20.6401L497.05 22.5701Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M473.57 29.2601C469.683 30.4268 465.797 31.6268 461.91 32.8601L461.31 30.9501C465.197 29.7168 469.093 28.5168 473 27.3501L473.57 29.2601Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M450.29 36.6002C446.416 37.8802 442.56 39.1769 438.72 40.4902L438.07 38.6002C441.923 37.2669 445.79 35.9669 449.67 34.7002L450.29 36.6002Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M427.19 44.4999C423.35 45.8332 419.517 47.2099 415.69 48.6299L415 46.7499C418.833 45.3565 422.67 43.9765 426.51 42.6099L427.19 44.4999Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M404.24 52.8702C400.42 54.2902 396.617 55.7336 392.83 57.2002L392.11 55.3302C395.91 53.8702 399.72 52.4236 403.54 50.9902L404.24 52.8702Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M381.44 61.61C377.64 63.0967 373.85 64.5933 370.07 66.1L369.33 64.25C373.11 62.75 376.903 61.25 380.71 59.75L381.44 61.61Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M358.74 70.6498C354.96 72.1898 351.194 73.7265 347.44 75.2598L346.68 73.4098C350.434 71.8698 354.207 70.3331 358 68.7998L358.74 70.6498Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M336.13 79.9101L324.84 84.5901L324.07 82.7501C327.823 81.1901 331.586 79.6267 335.36 78.0601L336.13 79.9101Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M313.57 89.2902L306.62 92.1902L302.29 94.0002L301.52 92.1602L305.89 90.3402L312.8 87.4502L313.57 89.2902Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M291 98.6998L285.38 101C283.48 101.786 281.58 102.556 279.68 103.31L278.95 101.45C280.83 100.7 282.72 99.9398 284.62 99.1498L290.23 96.8198L291 98.6998Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M268.23 107.69C264.357 109.083 260.497 110.417 256.65 111.69L256.04 109.79C259.86 108.55 263.7 107.217 267.56 105.79L268.23 107.69Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M245 115.25C241 116.417 237.047 117.49 233.14 118.47L232.65 116.54C236.537 115.54 240.453 114.47 244.4 113.33L245 115.25Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M221.23 121.31C217.23 122.21 213.23 123.02 209.23 123.77L208.86 121.77C212.807 121.03 216.783 120.217 220.79 119.33L221.23 121.31Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M197.17 125.83C193.103 126.457 189.06 127.013 185.04 127.5L184.8 125.5C188.8 125.013 192.823 124.46 196.87 123.84L197.17 125.83Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M172.88 128.78C168.773 129.153 164.707 129.45 160.68 129.67L160.56 127.67C164.56 127.437 168.607 127.143 172.7 126.79L172.88 128.78Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148.43 130.16C144.304 130.26 140.22 130.29 136.18 130.25V128.25C140.18 128.29 144.244 128.26 148.37 128.16L148.43 130.16Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M124 128L123.92 130C119.78 129.833 115.71 129.603 111.71 129.31L111.85 127.31C115.86 127.55 119.9 127.79 124 128Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.7399 126.17L99.5299 128.17C95.3899 127.73 91.3299 127.17 87.3599 126.67L87.6399 124.67C91.5932 125.23 95.6265 125.73 99.7399 126.17Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.6402 122.78L75.2902 124.78C71.1569 124.06 67.1402 123.287 63.2402 122.46L63.6502 120.46C67.5402 121.29 71.5302 122.07 75.6402 122.78Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.82 117.74L51.34 119.68C47.23 118.68 43.27 117.58 39.48 116.48L40.04 114.56C43.8133 115.66 47.74 116.72 51.82 117.74Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.52 99.3901L6.39 109.73L0 100.11L11.52 99.3901Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.43 110.9L27.79 112.79C23.7 111.41 19.86 109.99 16.27 108.57L17.01 106.71C20.5567 108.123 24.3634 109.52 28.43 110.9Z"
          fill="white"
        />
      </svg>
    </section>
  )
}

export default WorkFlow
