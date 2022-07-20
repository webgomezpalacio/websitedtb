import React, { Fragment } from 'react'
import About from '../About-us/About'
import Footer from '../Footer/Footer'
import Forms from '../Forms/Forms'
import HeroSection from '../Hero-Section/HeroSection'
import Bienestar from '../Menu/Bienestar'
import Hero from './Hero/Hero'


const Home = () => {
  return (
    <>
    <Fragment>
    <Hero />
    <HeroSection/>
    <About />
    <Bienestar />
    <Forms />
      <Footer />
    </Fragment>
    
    </>
  )
}

export default Home