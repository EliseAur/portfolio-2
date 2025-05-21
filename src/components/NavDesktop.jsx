import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/**
 * NavDesktop component displays the desktop navigation bar with internal links and social icons.
 *
 * Features:
 * - Navigation links to Projects, About, and Contact sections (scrolls on homepage)
 * - Social icons for GitHub, LinkedIn, and email
 * - Only visible on medium screens and up (hidden on mobile)
 *
 * @component
 * @example
 * return (
 *   <NavDesktop />
 * )
 */
export default function NavDesktop() {
  const navigate = useNavigate();

  return (
    <nav className="hidden md:flex justify-end w-full flex-2/3 mt-2">
      <div className="flex-1/2 space-x-6 flex-grow mx-auto text-center uppercase font-links">
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/", { state: { scrollTo: "projects" } });
          }}
        >
          Projects
        </Link>
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/", { state: { scrollTo: "about" } });
          }}
        >
          About
        </Link>
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/", { state: { scrollTo: "contact" } });
          }}
        >
          Contact
        </Link>
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
