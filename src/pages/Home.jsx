import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Resorts from './Resorts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Resorts />
      <Footer />
    </div>
  )
}

export default Home
