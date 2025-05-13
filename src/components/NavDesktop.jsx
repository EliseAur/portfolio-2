import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavDesktop() {
  return (
    <nav className="hidden md:flex justify-end w-full flex-2/3 mt-2">
      <div className="flex-1/2 space-x-6 flex-grow mx-auto text-center uppercase font-links">
        <a href="#projects" className="hover:text-dark-purple hover:cursor-pointer">
          Projects
        </a>
        <a href="#about" className="hover:text-dark-purple hover:cursor-pointer">
          About
        </a>
        <a href="#contact" className="hover:text-dark-purple hover:cursor-pointer">
          Contact
        </a>
      </div>
      <div className="flex-1/2 space-x-4 text-right">
        <a href="https://github.com/EliseAur" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-xl hover:text-dark-purple hover:cursor-pointer"
            title="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/elise-aurtande/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-xl hover:text-dark-purple hover:cursor-pointer"
            title="LinkedIn"
          />
        </a>
        <a href="mailto:elise.aurtande@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl hover:text-dark-purple hover:cursor-pointer"
            title="Email"
          />
        </a>
      </div>
    </nav>
  );
}
