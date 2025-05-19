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
      short: "A platform for booking holiday accommodations and hosting venues.",
      features:
        "Holidaze is a comprehensive platform where users can book holiday accommodations and also host their own venues. It features property listings, search functionality, and responsive design. The project is built with React and Tailwind CSS and integrates with the Noroff API for managing data.",
      technologies: "React, Tailwind CSS, Noroff API V2",
    },
    keyWords: "React • Tailwind • Noroff API",
    links: {
      git: "https://github.com/EliseAur/holidaze.git",
      live: "https://elise-holidaze.netlify.app",
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
      short: "An eCommerce store for browsing, searching, and purchasing products.",
      features:
        "Shop:it lets users browse all products, search with a live look-ahead search bar, and view detailed product pages with reviews and discounts. Users can add items to a cart, view and manage their cart, and complete a checkout process with order confirmation. Includes a contact form with validation. The app uses React Router for navigation and features a custom layout with header, cart icon, and footer.",
    },
    keyWords: "React • Tailwind • Noroff API",
    links: {
      git: "https://github.com/EliseAur/ecom-store",
      live: "https://ecom-shopit.netlify.app",
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
      short: "An auction platform where users can register, create listings, and place bids.",
      features:
        "Aurtande Auctions allows users to register with their Noroff email, log in, update their avatar, and view their credits. Users can create, update, and delete auction listings with media galleries, place bids on other listings, and view all bids. Unregistered users can browse and search listings. The platform features a responsive design and user-friendly interface.",
      technologies: "HTML, CSS, JavaScript, SASS, Bootstrap, Noroff API",
    },
    keyWords: "JavaScript • Bootstrap • Noroff API",
    links: {
      git: "https://github.com/EliseAur/aurtande-auctions",
      live: "https://eliseaur.github.io/aurtande-auctions/",
    },
    images: {
      desktop: aurtandeAuctionsDesktop,
      mobile: aurtandeAuctionsMobile,
      tablet: "",
    },
  },
];

export default projects;
