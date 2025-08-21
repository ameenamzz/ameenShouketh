import React from "react";

const Contact = ({ darkTheme }) => {
  return (
    <div>
      <section className="hero bg-base-00 ">
        <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Get in Touch
            </h1>
            <div className="flex justify-evenly py-10">
              {darkTheme ? (
                <img
                  className="w-[5%]"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                />
              ) : (
                <img
                  className="w-[5%]"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                />
              )}
              <img
                className="w-[5%]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
