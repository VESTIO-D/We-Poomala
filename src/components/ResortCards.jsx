import React from 'react'
import resorts from '../data/resort'

const ResortCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-5 lg:px-10">
        {resorts.map(resort => (
            <div className="flex flex-col gap-5 text-green-950 shadow-sm p-6 " key={resort.id}>
            <div className="h-48 w-full">
            <img src={resort.image} alt="Resort" className="rounded-xl object-cover w-full h-full" />
            
            </div>
            <span className="font-semibold text-xl lg:text-xl">{resort.name}</span>
            <div className="flex gap-4 text-green-950/60">
                <span>bedroom:1</span><span>pool:1</span><span>rs:2000</span>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ResortCards
