import React from "react";

const Projects = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
        Projects
      </h1>

      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {[
          {
            title: "Dev Connect",
            desc: "A platform for people to connect through chat and collaboration features.",
          },
          {
            title: "Prompt Planner",
            desc: "A to-do list app where you organize tasks and let AI generate new ones with your prompts.",
          },
          {
            title: "Swiggy Clone",
            desc: "A clone of Swiggy with restaurant listings, food ordering, and cart management.",
          },
          {
            title: "YouTube Clone",
            desc: "A YouTube-like app using the YouTube API.",
          },
          {
            title: "E-commerce App",
            desc: "A full-stack MERN app with product catalog, cart, and secure checkout.",
          },
          {
            title: "Chat Application",
            desc: "Real-time chat with Socket.io, private messaging, and online status.",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="card bg-base-300 shadow-sm rounded-lg p-3"
          >
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold">
                {project.title}
              </h2>
              <p className="text-sm">{project.desc}</p>
              <div className="flex gap-3 pt-4">
                <a className="text-sm font-medium link">Source</a>
                <a className="text-sm font-medium link">Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
