import aurtandeAuctionsDesktop from "../images/projects/aurtande-auctions-desktop.jpg";
import aurtandeAuctionsMobile from "../images/projects/aurtande-auctions-mobile.jpg";
import shopitDesktopHome from "../images/projects/shopit-desktop-home.jpg";
import shopitMobile from "../images/projects/shopit-mobile.jpg";
import holidazeDesktop from "../images/projects/holidaze-desktop.jpg";
import holidazeMobileVenue from "../images/projects/holidaze-mobile-venue.jpg";

const projects = [
  {
    id: 1,
    projectType: "Project Exam 2",
    title: "Holidaze",
    description: {
      short:
        "A platform for booking holiday accommodations and hosting venues. Built with React and Tailwind CSS. Supported by the Noroff API.",
      features:
        "Holidaze is a comprehensive platform where users can book holiday accommodations and also host their own venues. It features property listings, search functionality, and responsive design. The project is built with React and Tailwind CSS and integrates with the Noroff API for managing data.",
      technologies: "React, Tailwind CSS, Noroff API V2",
    },
    keyWords: "React • Tailwind • Noroff API",
    links: {
      git: "",
      live: "",
    },
    images: {
      desktop: holidazeDesktop,
      mobile: holidazeMobileVenue,
      tablet: "",
    },
  },
  {
    id: 2,
    projectType: "JavaScript Frameworks",
    title: "Shop:it",
    description: {
      short:
        "A platform for booking holiday accommodations and hosting venues. Built with React and Tailwind CSS. Supported by the Noroff API.",
      features:
        "Holidaze is a comprehensive platform where users can book holiday accommodations and also host their own venues. It features property listings, search functionality, and responsive design. The project is built with React and Tailwind CSS and integrates with the Noroff API for managing data.",
      technologies: "React, Tailwind CSS, Noroff API V2",
    },
    keyWords: "React • Tailwind • Noroff API",
    links: {
      git: "",
      live: "",
    },
    images: {
      desktop: shopitDesktopHome,
      mobile: shopitMobile,
      tablet: "/images/holidaze-tablet.jpg",
    },
  },
  {
    id: 3,
    projectType: "Semester Project 2",
    title: "Aurtande Auctions",
    description: {
      short:
        "A platform for booking holiday accommodations and hosting venues. Built with React and Tailwind CSS. Supported by the Noroff API.",
      features:
        "Holidaze is a comprehensive platform where users can book holiday accommodations and also host their own venues. It features property listings, search functionality, and responsive design. The project is built with React and Tailwind CSS and integrates with the Noroff API for managing data.",
      technologies: "React, Tailwind CSS, Noroff API V2",
    },
    keyWords: "React • Tailwind • Noroff API",
    links: {
      git: "",
      live: "",
    },
    images: {
      desktop: aurtandeAuctionsDesktop,
      mobile: aurtandeAuctionsMobile,
      tablet: "/images/holidaze-tablet.jpg",
    },
  },
];

export default projects;
