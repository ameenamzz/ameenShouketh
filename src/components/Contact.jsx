import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = ({ darkTheme }) => {
  return (
    <div>
      <section className="hero bg-base-00 ">
        <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
              Get in Touch
            </h1>
            <div className=" py-10">
              {darkTheme ? (
                <>
                  <ul className="menu menu-horizontal bg-base-">
                    <li>
                      <a href="https://www.linkedin.com/in/ameenshouketh">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="text-white-600 text-2xl"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=shoukethameen@gmail.com"
                        target="blank"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-white-600 text-2xl"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ameen_shouketh/"
                        target="blank"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-white-600 text-2xl"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/ameenamzz">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="text-white-600 text-2xl"
                        />
                      </a>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                   <ul className="menu menu-horizontal bg-base-">
                    <li>
                      <a href="https://www.linkedin.com/in/ameenshouketh">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="text-black-600 text-2xl"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=shoukethameen@gmail.com"
                        target="blank"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-black-600 text-2xl"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ameen_shouketh/"
                        target="blank"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-black-600 text-2xl"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/ameenamzz">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="text-black-600 text-2xl"
                        />
                      </a>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
