import { PointIcon } from '@/components/svg'
import { Button } from '@/components/ui'
import React from 'react'

const data = [
  {
    id: 1,
    heading: 'Email',
    info: 'dnyanesh@growthios.com',
  },
  {
    id: 2,
    heading: 'Phone',
    info: '+91 9665774114',
  },
  {
    id: 3,
    heading: 'Address',
    info: '98, Laxmi Niwas, Gajanan nagar Lane 7 , Dabki Road, Sopinath maharaj temple, Gajanan Nagar, Akola, Akola, Maharashtra, 444002',
  },
]

const CompanyInfo = () => {
  return (
    <div className="company__info__container">
      <div className="company__info__wrapper">
        {data.map((item) => (
          <div className="company__info__cover" key={item.id}>
            <PointIcon />
            <h1>{item.heading}</h1>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
      <div className="company__info__location__button">
        <Button>See Location</Button>
      </div>
    </div>
  )
}

export default CompanyInfo
