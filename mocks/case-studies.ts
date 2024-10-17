const CASE_STUDIES = [
  {
    id: "case-1",
    title: "KLOG Reality Solutions",
    description: 'Our client, Mr.Deepak kumar is an experienced real estate professional with over 10 years in the industry . He has primarily served at biggest real estate syndicate “Property Pistol” , hails from Kharghar he just started his company "Klog Realty Solutions" and it was his first try to online lead generation and his first choice was Growthios',
    image: '/images/case-studies/klog-reality-solutions/main-image.webp',
    isFeatured: true,
    content: {
      mainHeading: {
        heading: "How Growthios Boosted a Navi Mumbai Realtor's Revenue to ₹1.75 Crores in Just 90 days",
        image: '/images/case-studies/klog-reality-solutions/main-image.webp'
      },
      agenda: {
        heading: "Agenda",
        content: [
          {
            point: "Introduction"
          },
          {
            point: "Client Overview"
          },
          {
            point: "Challenges Faced by Client"
          },
          {
            point: "How We Joined Hands"
          },
          {
            point: "Growthios' Winning Strategy"
          },
          {
            point: "Campaign Highlights"
          },
          {
            point: "Ad Presentation"
          },
          {
            point: "Achievements with Growthios"
          },
          {
            point: "Evidence of Success"
          },
          {
            point: ""
          },
          {
            point: "Get in Touch"
          },
        ]
      },
      introduction: {
        heading: "Introduction",
        content: "Growthios proudly presents a transformative digital journey we undertook with a Navi mumbai based realtor. Facing challenges with insufficient lead generation, this client had just started his business so he needed consistent leads so here's how Growthios entered",
        image: '/images/home-about.webp'
      },
      clientOverview: {
        heading: "Client Overview",
        content: "Our client,Mr.Deepak kumar is an experienced real estate professional with over 10 years in the industry . He has primarily served at biggest real estate syndicate “Property Pistol” , hails from Kharghar he just started his company 'Klog Realty Solutions' and it was his first try to online lead generation and his first choice was Growthios",
        image: '/images/home-about.webp'
      },
      clientChallenges: {
        heading: "Challenges Faced by Client",
        content: [
          {
            point: 'Was Starting the real estate business for 1st time.'
          },
          {
            point: "He wasn't sure about the future of leads and site visits."
          }
        ],
        image: '/images/home-about.webp'
      },
      joinedHand: {
        heading: "How We Joined Hands",
        content: "Our constant educational posts about real estate marketing and lead generation caught his attention and he reach out to us and that’s how we joined the hands.",
        image: '/images/home-about.webp'
      },
      strategy: {
        heading: "Growthios' Winning Strategy",
        content: "We zoomed in on Facebook Ads, an efficient and cost-effective solution for precise audience targeting. We created compelling ads with Persuasive copies."
      },
      campaignHighlights: {
        heading: "Campaign Highlights",
        content: [
          {
            point: {
              heading: "Project",
              content: "Midsegmet residential property: 2 & 3 Bhk , Plots at Khopoli , Panvel , Flats at Thane"
            }
          },
          {
            point: {
              heading: "Objective",
              content: "Online lead generation through Facebook Ads"
            }
          },
          {
            point: {
              heading: "Price",
              content: [
                {
                  point: "1 Bhk - 45.90 Lakhs-75 lakhs"
                },
                {
                  point: "2 Bhk - 80 lakhs -90 lakhs"
                },
                {
                  point: "3 Bhk - 1.2 Cr-1.5 Cr"
                },
              ]
            }
          },
          {
            point: {
              heading: "Targeting",
              content: "Kharaghar , Khopoli , Thane , SOBO , South Delhi , Gurgaon , Navi Mumbai High End Suburbs 30 - 65 years Gender : Both male and female"
            }
          },
          {
            point: {
              heading: "Audience",
              content: "Individuals working professionals, looking for property, getting married soon, looking for new Home , investors etc"
            }
          },
        ]
      },
      adsPresentation: {
        heading: "Ads Presentation",
        images: [
          {image: '/images/home-about.webp'},
          {image: '/images/home-about.webp'},
        ]
      },
      achievements: {
        heading: "Achievements",
        content: "3 Sales × 58 lakhs (Avg) = 1.75 crores ( 2 Booking got cancelled )",
        image: '/images/home-about.webp'
      },
      success: {
        heading: "Evidence of Success",
        content: "This is Growthios' footprint in the Navi Mumbai Real estate market. With the right digital strategy, we turned leads into a whopping 1.50 Crores. Reduced CPL from 715 to 360 and 530 to 430 ₹ in less than 45 days",
        mediaSpend: "300,000 ₹",
        revenue: "1.75 Crores",
        roi: "ROI : 5,833%"
      }
    }
  },
  {
    id: "case-2",
    title: "Navi Mumbai Market",
    description: "Our client, Mr.Rupesh Pawar an experienced real estate professional with over 3 years in the industry, hails from Navi Mumbai His portfolio primarily includes 2BHK to 4BHK apartments,he runs a firm called lease for you which is sole selling real estate firm",
    image: '/images/home-about.webp',
    isFeatured: true
  },
  {
    id: "case-3",
    title: "Bangalore Market",
    description: "Our client, an experienced real estate professional with over 4 years in the industry, hails from Bangalore - India's Silicon Valley. His portfolio primarily includes 2BHK to 5BHK apartments, villas, and other residential properties",
    image: '/images/home-about.webp',
    isFeatured: true
  }
]

export function getFeaturedCaseStudies() {
  return CASE_STUDIES.filter((c) => c.isFeatured);
}

export function getAllCaseStudies() {
  return CASE_STUDIES;
}

export function getCaseStudyById(title) {
  return CASE_STUDIES.find((c) => c.title.split(" ").join("-").toLowerCase() === title);
}