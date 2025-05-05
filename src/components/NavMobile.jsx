import { Link } from "react-router-dom";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavDesktop() {
  return (
    <nav className="hidden md:flex justify-end w-full flex-2/3">
      <div className="flex-1/2 space-x-4 flex-grow mx-auto text-center">
        <Link
          to="/projects"
          className={` ${location.pathname === "/projects" ? "underline decoration-2" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={` ${location.pathname === "/about" ? "underline decoration-2" : ""}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={` ${location.pathname === "/contact" ? "underline decoration-2" : ""}`}
        >
          Contact
        </Link>
      </div>

      <div className="flex-1/2 space-x-4 text-right">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-gray-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-gray-400" />
        </a>
      </div>
    </nav>
  );
}

export function NavMobile() {
  return (
    <nav className="md:hidden fixed top-[48px] left-0 w-full h-[calc(100%-60px)] flex flex-col items-center justify-center bg-gray-200 p-4">
      <div className="flex flex-col">
        <Link
          to="/projects"
          className={` ${location.pathname === "/projects" ? "underline decoration-2" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={` ${location.pathname === "/about" ? "underline decoration-2" : ""}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={` ${location.pathname === "/contact" ? "underline decoration-2" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
