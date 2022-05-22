import React from 'react'
import FeaturedCards from '../FeaturedCard'
import "../../style/sectionOne.css";

function SectionTwoHome() {
  return (
    <div className='sectionTwoCont'>
      <div className='textContainer'>
      <span>PROPERTIES</span>
      <h2>Featured Listings</h2>
      </div>
      <FeaturedCards/>
    </div>
  )
}

export default SectionTwoHome