import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavDesktop, NavMobile } from "./index";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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

  return (
    <header id="top" className="text-beige font-bold w-full z-20 bg-gray-200">
      <div className="flex p-3">
        <div className="flex w-full">
          <div className="logo w-[200px] flex-1/3">elise aurtande</div>
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
          className="fixed top-0 right-0 pl-15 pb-5 rounded-bl-sm font-bold flex flex-col items-center justify-start z-50 md:hidden"
        >
          <NavMobile />
        </div>
      )}
    </header>
  );
}
