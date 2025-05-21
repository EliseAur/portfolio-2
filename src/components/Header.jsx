import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavDesktop, NavMobile } from "./index";

/**
 * Header component displays the site logo and navigation menus for desktop and mobile.
 *
 * Features:
 * - Sticky header with site logo that scrolls to top or navigates home
 * - Desktop and mobile navigation menus
 * - Responsive hamburger menu with open/close icons
 * - Closes mobile menu on route change or outside click
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null); // Reference for the toggle button

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target) // Exclude toggle button
    ) {
      setIsOpen(false);
    }
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add event listener to detect clicks outside the menu
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="w-full z-50 sticky top-0 bg-grey shadow-xs">
      <div className="flex py-3 px-3 sm:pr-5 max-w-[1280px] mx-auto">
        <div className="flex w-full justify-center items-center">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="logo w-[200px] flex-1/3 font-black italic text-3xl font-headings hover:text-dark-purple hover:cursor-pointer tracking-tight"
          >
            elise aurtande
          </Link>
          <NavDesktop />
          <div className="md:hidden ml-auto">
            <button
              ref={toggleButtonRef} // Attach ref to the toggle button
              onClick={() => setIsOpen((prevState) => !prevState)} // Toggle menu state
              className="focus:outline-none"
            >
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars} // Toggle between faBars and faTimes
                className="h-6 w-6 text-2xl text-black"
                title={isOpen ? "Close menu" : "Open menu"}
              />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 pl-15 pb-5 rounded-bl-sm flex flex-col items-center justify-start z-50 md:hidden"
        >
          <NavMobile onLinkClick={handleLinkClick} />
        </div>
      )}
    </header>
  );
}
