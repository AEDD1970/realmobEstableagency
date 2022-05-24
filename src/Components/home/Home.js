import React from 'react'
import Footer from '../Footer';
import SectionFourAgents from './SectionFourAgents';
import SectionOne from './sectionOne';
import SectionTwoHome from './SectionTwoHome';

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwoHome/>
      <SectionFourAgents />
      <Footer/>
    </div>
  )
}
