import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageOfMe2 from "../images/imsge-of-me-version-2.jpg";

/**
 * ContactSection component displays contact information and social links.
 *
 * This section includes:
 * - A heading and a short message inviting users to get in touch
 * - Email, GitHub, and LinkedIn links with icons
 * - A profile image
 *
 * @component
 * @example
 * return (
 *   <ContactSection />
 * )
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-[60px] flex flex-col justify-center w-full min-h-screen bg-gray-100 md:p-5 lg:p-10"
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <div className="flex flex-col sm:flex-row justify-center items-center flex-grow bg-black rounded-xs md:shadow-xs max-w-[1112px] mx-auto w-full">
        <ul className="flex flex-col items-centerflex-grow font-headings tracking-tight text-grey text-lg md:text-xl font-bold ml-5 sm:ml-10 mr-auto pt-10 sm:mb-auto md:mx-auto overflow-visible">
          <h2 className="text-3xl font-headings font-black mb-4 tracking-tight md:ml-10 lg:ml-0">
            Contact
          </h2>
          <p className="font-semibold text-sm md:text-lg mr-10 mb-6 md:mb-8 md:ml-10 lg:ml-0 max-w-[400px]">
            Please contact me via email or through any of the platforms below. I look forward to
            hearing from you!
          </p>
          <li className="mb-6 md:mb-8 hover:text-dark-purple hover:cursor-pointer py-3 px-auto border-1 rounded-xs w-[130px] sm:w-[180px] text-center md:ml-10 lg:ml-0">
            <a
              href="mailto:elise.aurtande@gmail.com"
              target="_blank"
              rel="noopener noreferrer "
              className=""
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-2" /> email
            </a>
          </li>
          <li className="mb-6 md:mb-8 hover:text-dark-purple hover:cursor-pointer py-3 px-auto border-1 rounded-xs w-[130px] sm:w-[180px] text-center md:ml-10 lg:ml-0">
            <a
              href="https://github.com/EliseAur"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl mr-1" /> github
            </a>
          </li>
          <li className="mb-0 md:mb-8 hover:text-dark-purple hover:cursor-pointer py-3 px-auto border-1 rounded-xs w-[130px] sm:w-[180px] text-center md:ml-10 lg:ml-0">
            <a
              href="https://www.linkedin.com/in/elise-aurtande/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-2" /> linkedin
            </a>
          </li>
        </ul>
        <div className=" max-w-[260px] sm:max-w-[320px] bg-black pt-3 ml-auto sm:mt-auto h-80 sm:h-full">
          <img src={imageOfMe2} alt="" className="object-cover rounded-xs h-full w-full" />
        </div>
      </div>
    </section>
  );
}
