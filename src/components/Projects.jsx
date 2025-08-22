import React from "react";

const Projects = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
        Projects
      </h1>

      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        <div className="card bg-base-300 shadow-sm rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Dev Connect</h2>
            <p>
              A platform to connect developers with chat, posts, and
              collaboration features.
            </p>
            <div className="grid pt-5">
              <a className="font-medium">Source</a>
              <a className="font-medium">Demo</a>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-sm rounded-lg">
          <div className="card-body">
            <h2 className="card-title">Prompt Planner</h2>
            <p>
              An AI-powered tool to organize and optimize your prompts for
              better workflow.
            </p>
             <div className="grid pt-5">
              <a className="font-medium">Source</a>
              <a className="font-medium">Demo</a>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-sm rounded-lg">
          <div className="card-body">
            <h2 className="card-title">Portfolio Website</h2>
            <p>
              A personal portfolio showcasing my projects, skills, and
              achievements.
            </p>
             <div className="grid pt-5">
              <a className="font-medium">Source</a>
              <a className="font-medium">Demo</a>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-sm rounded-lg">
          <div className="card-body">
            <h2 className="card-title">Blog Platform</h2>
            <p>
              A simple and scalable blogging platform with authentication and
              markdown support.
            </p>
             <div className="grid pt-5">
              <a className="font-medium">Source</a>
              <a className="font-medium">Demo</a>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-sm rounded-lg">
          <div className="card-body">
            <h2 className="card-title">E-commerce App</h2>
            <p>
              A full-stack MERN app with product catalog, cart, and secure
              checkout.
            </p>
             <div className="grid pt-5">
              <a className="font-medium">Source</a>
              <a className="font-medium">Demo</a>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-sm rounded-lg">
          <div className="card-body">
            <h2 className="card-title">Chat Application</h2>
            <p>
              Real-time chat with Socket.io, private messaging, and online
              status.
            </p>
             <div className="grid pt-5">
              <a className="font-medium">Source</a>
              <a className="font-medium">Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
