import React from 'react'
import ResortCards from '../components/ResortCards'

const Resorts = () => {
  return (
    <section
     className="flex flex-col items-center justify-center relative">

        <div className="container">

            <div className="grid max-w-sm sm:max-w-xl lg:max-w-5xl">
                <ResortCards />
            </div>
        </div>
        
    </section>
  )
}

export default Resorts
