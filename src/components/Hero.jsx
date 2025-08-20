import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="w-xl">
            <h1 className="text-5xl font-bold">Hi, I’m Ameen Shouketh</h1>
            <p className="py-7">
              I’m a passionate Full-Stack Web Developer skilled in building
              modern, scalable, and user-friendly applications with the MERN
              stack. I enjoy turning ideas into reality through clean code and
              intuitive design.
            </p>
            <button className="btn  bg-blue-600 rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Pizza"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
