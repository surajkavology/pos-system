import React from 'react'
import AboutInfoCard from './AboutInfoCard'
import dollarIcon from '../assets/Images/dollar-icon.svg'
import orderIcon from '../assets/Images/order-icon.svg'
import walkIcon from '../assets/Images/walk-icon.svg'
import onlineIcon from '../assets/Images/oline-icon.svg'

const AboutInfoCardWrap = () => {
const aboutcardInfo = [
    {cardIcon: `${dollarIcon}`, cardHeading: '$123456.00', cardPara: 'Revenue'},
    {cardIcon: `${orderIcon}`, cardHeading: '1309', cardPara: 'Orders'},
    {cardIcon: `${walkIcon}`, cardHeading: '840', cardPara: 'Walk-ins'},
    {cardIcon: `${onlineIcon}`, cardHeading: '199', cardPara: 'Online Orders'}
]

  return (
    <>
    <div className='about-info-card-wrap mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {aboutcardInfo.map((elem, index)=>(
            <AboutInfoCard key={index} icon={elem.cardIcon} heading={elem.cardHeading} text={elem.cardPara}/>
        ))}
    </div>
    </>
  )
}

export default AboutInfoCardWrap