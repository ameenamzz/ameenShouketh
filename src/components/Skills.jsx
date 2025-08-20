import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              I Code with....
            </h1>
            <div className="flex justify-between py-10">
              <img
                className="w-[10%]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              />

              <img
                className="w-[10%]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              />

              <img
                className="w-[10%]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />

              <img
                className="w-[10%]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              />

              <img
                className="w-[10%]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
