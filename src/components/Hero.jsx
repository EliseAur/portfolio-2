import profileImage from "../images/image-of-me-version-1.jpg";

/**
 * Hero component displays the main introduction section of the portfolio.
 *
 * Features:
 * - Profile image
 * - Location and status tagline
 * - Main heading and short description
 * - Button to scroll to the projects section
 *
 * @component
 * @example
 * return (
 *   <Hero />
 * )
 */
export default function Hero() {
  return (
    <div
      id="top"
      className="scroll-mt-[60px] min-h-screen flex items-center justify-center md:mx-3 pb-10 bg-gray-100"
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <div className="flex flex-col items-center md:flex-row max-w-[1280px] mx-auto">
        <div className="bg-black rounded-xs relative z-10 pl-0 pr-26 sm:pr-40 md:pr-30 lg:pr-50 xl:pr-70 mr-10 md:mr-0 pt-3">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full rounded-lg max-h-[450px] sm:max-w-[500px] md:max-h-[550px] "
          />
        </div>
        <div className="bg-mint md:-ml-17 -mt-30 sm:-mt-45 md:mt-0 px-5 sm:px-10 md:px-10 lg:px-20 xl:px-30 sm:py-15 md:py-35 lg:py-40 pb-12 pt-8 rounded-xs shadow-sm text-center z-20 ml-10 sm:ml-40 max-w-[336px] md:max-w-none">
          <p className="font-links tracking-tight uppercase text-xs xl:text-sm mb-3">
            Oslo • Noroff • Open to work
          </p>
          <h1 className="font-headings text-4xl sm:text-4xl xl:text-5xl font-black mb-3 break-words tracking-tight">
            frontend developer
          </h1>
          <p className="font-hadings tracking-tight text-sm font-semibold xl:text-sm mb-10">
            Creativ • Detail-Oriented • Problem Solver • Team Player • Organized
          </p>
          <a
            href="#projects"
            className=" font-links bg-black text-white py-4 px-17 rounded-xs hover:cursor-pointer hover:bg-dark-purple uppercase"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
