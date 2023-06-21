import hero from "../assets/images/hero.webp";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex justify-center flex-wrap">
            The<span className="text-orange-500 px-4">Bast</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex justify-center flex-wrap">
            Foods<span className="text-orange-500 px-4">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={hero}
          alt="burger"
        />
      </div>
    </div>
  );
}

export default Hero;
