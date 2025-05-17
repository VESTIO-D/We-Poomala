export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center relative"
    >
              <img src="/Hero.png" className="object-cover w-full " alt="" />

      <div className="container py-15 bg-opacity-50">

        <div className="grid gap-10 lg:gap-20 max-w-sm sm:max-w-xl lg:max-w-5xl lg:px-2 font-serif">

          <div className="relative text-center px-4 py-2">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to We Poomala</h1>
          <p className="text-lg md:text-2xl">A Nature-Loving, Privacy-Rich Escape</p>
          </div>

          <div className="relative px-4 py-2 text-[20px]">
            <p className="">
            Nestled in the heart of nature, Pomala is a hidden gem waiting to be explored. Whether you're seeking a peaceful retreat, an adventure-filled escape, or a luxurious beachfront getaway, our curated selection of resorts offers something for every traveler. From stunning coastal views to lush green landscapes, Pomala invites you to relax, recharge, and reconnect with what matters most.
            </p>
            <p className="">Book your stay with ease, discover local experiences, and let the beauty of Pomala create memories that last a lifetime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
