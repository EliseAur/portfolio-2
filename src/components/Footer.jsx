import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-grey text-center py-1 mt-5 font-headings text-black shadow-¨xs">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/EliseAur"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-dark-purple"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/elise-aurtande/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-dark-purple"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
        <a href="mailto:elise.aurtande@gmail.com" className="hover:text-dark-purple">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
        </a>
      </div>
      <div className="container mx-auto">
        <p className="text-sm my-4">© 2025 Elise Aurtande. All rights reserved.</p>
      </div>
    </footer>
  );
}
