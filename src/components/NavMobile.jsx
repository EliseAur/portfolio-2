import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavMobile({ onLinkClick }) {
  return (
    <nav className="md:hidden fixed top-[48px] left-0 w-full h-[calc(100%-60px)] flex flex-col items-center p-4 bg-grey font-headings uppercase font-bold text-xl pt-50">
      <div className="flex flex-col space-y-5 text-center">
        <a
          href="#projects"
          onClick={onLinkClick}
          className="border-2 hover:border-dark-purple hover:text-dark-purple active:border-dark-purple active:text-dark-purple hover:cursor-pointer py-4 px-20 rounded-xs shadow-xs "
        >
          Projects
        </a>

        <a
          href="#about"
          onClick={onLinkClick}
          className="border-2 hover:border-dark-purple hover:text-dark-purple active:border-dark-purple active:text-dark-purple hover:cursor-pointer py-4 px-20 rounded-xs shadow-xs"
        >
          About
        </a>

        <a
          href="#contact"
          onClick={onLinkClick}
          className="border-2 hover:border-dark-purple hover:text-dark-purple active:border-dark-purple active:text-dark-purple hover:cursor-pointer py-4 px-20 rounded-xs shadow-xs"
        >
          Contact
        </a>
      </div>
      <div className="mt-10 space-x-6">
        <a href="https://github.com/EliseAur" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl hover:text-dark-purple hover:cursor-pointer"
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
            className="text-4xl hover:text-dark-purple hover:cursor-pointer"
            title="LinkedIn"
          />
        </a>
        <a href="mailto:elise.aurtande@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-4xl hover:text-dark-purple hover:cursor-pointer"
            title="Email"
          />
        </a>
      </div>
    </nav>
  );
}
