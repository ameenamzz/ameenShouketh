import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero bg-base-00 py-30 sm:py-40 lg:py-60">
        <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-primary">Ameen Shouketh</span>
            </h1>
            <p className="py-6 text-base sm:text-lg md:text-xl text-gray-600">
              I’m a passionate Full-Stack Web Developer skilled in building
              modern, scalable, and user-friendly applications with the MERN
              stack. I enjoy turning ideas into reality through clean code and
              intuitive design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
