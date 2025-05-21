import aurtandeAuctionsDesktop from "../images/projects/aurtande-auctions-desktop.jpg";
import aurtandeAuctionsMobile from "../images/projects/aurtande-auctions-mobile.jpg";
import shopitDesktopHome from "../images/projects/shopit-desktop-home.jpg";
import shopitMobile from "../images/projects/shopit-mobile.jpg";
import holidazeDesktop from "../images/projects/holidaze-desktop.jpg";
import holidazeMobileVenue from "../images/projects/holidaze-mobile-venue.jpg";

/**
 * Array of project objects representing portfolio projects.
 *
 * Each project contains:
 * - id: Unique identifier
 * - projectType: The type or category of the project
 * - title: Project name
 * - description: Object with short and long descriptions, feature list, and technologies used
 * - keyWords: Technologies and keywords for the project
 * - links: Object with GitHub and live site URLs
 * - images: Object with desktop and mobile image imports
 *
 * @type {Array<{
 *   id: number,
 *   projectType: string,
 *   title: string,
 *   description: {
 *     short: string,
 *     long: string,
 *     featuresList: string[],
 *     technologies: string
 *   },
 *   keyWords: string,
 *   links: { git: string, live: string },
 *   images: { desktop: string, mobile: string }
 * }>}
 */
const projects = [
  {
    id: 1,
    projectType: "Project Exam 2",
    title: "Holidaze",
    description: {
      short: "A platform for booking holiday accommodations and hosting venues.",
      long: "Holidaze is a comprehensive platform where users can book holiday accommodations and also host their own venues. It features property listings, search functionality, and responsive design. The project is built with React and Tailwind CSS and integrates with the Noroff API for managing data. \n\nTo test all features, go to the live site and register with a stud.noroff.no email address.",
      featuresList: [
        "A user may search for a specific venue",
        "A user may filter all venues",
        "A user may view a specific venue page by its ID",
        "A user may view a calendar with available dates for a venue",
        "A user with a stud.noroff.no email may register as a customer",
        "A user with a stud.noroff.no email may register as a venue manager (Note: Venue managers hosting venues cannot undo their role unless they delete their venues. Venues with bookings cannot be deleted.)",
        "A registered customer may create a booking at a venue",
        "A registered customer may view their upcoming bookings",
        "A registered venue manager may create a venue",
        "A registered venue manager may update a venue they manage",
        "A registered venue manager may delete a venue they manage",
        "A registered venue manager may view bookings for a venue they manage",
        "A registered user may log in",
        "A registered user may update their avatar, banner, and bio",
        "A registered user may log out",
      ],
      technologies: "React, Tailwind CSS, Noroff API",
    },
    keyWords: "React • Vite • Tailwind CSS • Noroff API",
    links: {
      git: "https://github.com/EliseAur/holidaze.git",
      live: "https://elise-holidaze.netlify.app",
    },
    images: {
      desktop: holidazeDesktop,
      mobile: holidazeMobileVenue,
    },
  },
  {
    id: 2,
    projectType: "JavaScript Frameworks",
    title: "Shop:it",
    description: {
      short: "An eCommerce store for browsing, searching, and purchasing products.",
      long: "Shop:it lets users browse all products, search with a live look-ahead search bar, and view detailed product pages with reviews and discounts. Users can add items to a cart, view and manage their cart, and complete a checkout process with order confirmation. Includes a contact form with validation. The app uses React Router for navigation and features a custom layout with header, cart icon, and footer. \n\nTo test all features, go to the live site. No registration required.",
      featuresList: [
        "A user may browse all products on the homepage",
        "A user may search for products using a look-ahead search bar",
        "A user may view details for an individual product",
        "A user may see product reviews and discounts on the product page",
        "A user may add products to their cart",
        "A user may view the number of items in their cart in the header",
        "A user may view all items in their cart on the cart page",
        "A user may see the total price of items in their cart",
        "A user may remove items from their cart",
        "A user may update the quantity of items in their cart",
        "A user may clear their cart",
        "A user may proceed to checkout from the cart page",
        "A user may see a confirmation message after a successful checkout",
        "A user may fill out and submit a contact form with validation",
      ],
      technologies: "HTML, CSS, React, Tailwind CSS, Noroff API",
    },
    keyWords: "React • Vite • Tailwind CSS • Noroff API",
    links: {
      git: "https://github.com/EliseAur/ecom-store",
      live: "https://ecom-shopit.netlify.app",
    },
    images: {
      desktop: shopitDesktopHome,
      mobile: shopitMobile,
    },
  },
  {
    id: 3,
    projectType: "Semester Project 2",
    title: "Aurtande Auctions",
    description: {
      short: "An auction platform where users can register, create listings, and place bids.",
      long: "Aurtande Auctions is a full-featured auction website built as part of the Noroff Semester Project 2. The goal was to create a modern, responsive web application where users can register, log in, and participate in online auctions.\n\nRegistered users can create their own auction listings, upload images, set deadlines, and provide detailed descriptions for their items. Users can also place bids on other users’ listings, view the bidding history, and manage their own listings by updating or deleting them as needed. \n\nThe platform is designed to be responsive, user-friendly and accessible, allowing unregistered users to browse and search through available listings. The application integrates with the Noroff Auction API to handle user authentication, listing management, and bidding functionality. \n\nTo test all features, go to the live site and register with a stud.noroff.no email address.",
      featuresList: [
        "A user with a stud.noroff.no email may register",
        "A registered user may login",
        "A registered user may logout",
        "A registered user may update their avatar",
        "A registered user may view their total credit",
        "A registered user may create a Listing with a title, deadline date, media gallery and description",
        "A registered user may add a Bid to another user’s Listing",
        "A registered user may view Bids made on a Listing",
        "An unregistered user may search through Listings",
        "A registered user may update their listing",
        "A registered user may delete their listing",
        "A registered user may view their own Listings",
        "A registered user may view their own Bids",
        "A registered user may view their winning Bids",
      ],
      technologies: "HTML, CSS, JavaScript, SASS, Bootstrap, Noroff API",
    },
    keyWords: "JavaScript • Bootstrap • SASS • Noroff API",
    links: {
      git: "https://github.com/EliseAur/aurtande-auctions",
      live: "https://eliseaur.github.io/aurtande-auctions/",
    },
    images: {
      desktop: aurtandeAuctionsDesktop,
      mobile: aurtandeAuctionsMobile,
    },
  },
];

export default projects;
