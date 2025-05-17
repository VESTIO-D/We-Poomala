import React from 'react'
import resorts from '../data/resort'

const ResortCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 py-2 gap-6">
        {resorts.map(resort => (
            <div className="grid text-green-950 shadow-lg rounded-xl overflow-hidden p-2 gap-3" key={resort.id}>
            <div className="aspect-square w-full ">
            <img src={resort.image} alt="Resort" className="rounded-xl object-cover w-full h-full" />
            
            </div>
            <div className="grid gap-5 py-4">
            <span className="font-semibold text-xl lg:text-xl">{resort.name}</span>
            <div className="flex gap-4 text-green-950/60">
                <span>bedroom:1</span><span>pool:1</span><span>rs:2000</span>
            </div>
            </div>
        </div>
        ))}
    </div>
    
  )
}

export default ResortCards
