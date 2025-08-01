import videoSrc from '/Monsoon_Serenity_with_Air_Purifier.mp4';

const Hero = () => {
  return (
    <section className="relative text-white py-40 overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Finally, clean air.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Unbreathable air, cleanable air.
        </p>
        <a 
          className="btn-primary py-3 px-8 rounded-full text-lg font-semibold inline-block"
          href="#"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;