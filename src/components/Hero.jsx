export default function Hero() {
  return (
    <section
      className=" bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/your-hero-image.jpg')`,
      }}
    >
              <img src="/Hero.png" className="object-cover w-full" alt="" />

      <div className="container bg-opacity-50">
      <div className="relative text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to We Poomala</h1>
        <p className="text-xl md:text-2xl">A Nature-Loving, Privacy-Rich Escape</p>
      </div>
      </div>
    </section>
  );
}
