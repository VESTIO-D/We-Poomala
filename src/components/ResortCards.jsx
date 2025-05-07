import React from 'react'

const ResortCards = () => {
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-5 lg:px-10">
        <div className="flex flex-col gap-5 text-green-950 shadow-sm p-6">
            <img src="/lake.webp" width={350} alt="Resort" className="rounded-xl object-cover h-80 sm:h-auto" />
            <span className="font-semibold text-xl lg:text-xl">The Lake House</span>
            <div className="flex gap-4 text-green-950/60">
                <span>bedroom:1</span><span>pool:1</span><span>rs:2000</span>
            </div>
        </div>

        <div className="flex flex-col gap-5 text-green-950 shadow-sm p-6">
            <img src="/lake.webp" width={350} alt="Resort" className="rounded-xl object-cover h-80 sm:h-auto" />
            <span className="font-semibold text-xl lg:text-xl">The Lake House</span>
            <div className="flex gap-4 text-green-950/60">
                <span>bedroom:1</span><span>pool:1</span><span>rs:2000</span>
            </div>
        </div>

        <div className="flex flex-col gap-5 text-green-950 shadow-sm p-6">
            <img src="/lake.webp" width={350} alt="Resort" className="rounded-xl object-cover h-80 sm:h-auto" />
            <span className="font-semibold text-xl lg:text-xl">The Lake House</span>
            <div className="flex gap-4 text-green-950/60">
                <span>bedroom:1</span><span>pool:1</span><span>rs:2000</span>
            </div>
        </div>

        <div className="flex flex-col gap-5 text-green-950 shadow-sm p-6">
            <img src="/lake.webp" width={350} alt="Resort" className="rounded-xl object-cover h-80 sm:h-auto" />
            <span className="font-semibold text-xl lg:text-xl">The Lake House</span>
            <div className="flex gap-4 text-green-950/60">
                <span>bedroom:1</span><span>pool:1</span><span>rs:2000</span>
            </div>
        </div>

        <div className="flex flex-col gap-5 text-green-950 shadow-sm p-6">
            <img src="/lake.webp" width={350} alt="Resort" className="rounded-xl object-cover h-80 sm:h-auto" />
            <span className="font-semibold text-xl lg:text-xl">The Lake House</span>
            <div className="flex gap-4 text-green-950/60">
                <span>bedroom:1</span><span>pool:1</span><span>rs:2000</span>
            </div>
        </div>

    </div>
  )
}

export default ResortCards
