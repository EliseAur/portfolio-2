import aurtandeAuctionsDesktop from "../images/projects/aurtande-auctions-desktop.jpg";
import aurtandeAuctionsMobile from "../images/projects/aurtande-auctions-mobile.jpg";
import shopitDesktopHome from "../images/projects/shopit-desktop-home.jpg";
import shopitMobile from "../images/projects/shopit-mobile.jpg";
import holidazeDesktop from "../images/projects/holidaze-desktop.jpg";
import holidazeMobileVenue from "../images/projects/holidaze-mobile-venue.jpg";
import portfolio1Desktop from "../images/projects/portfolio1-desktop.jpg";
import portfolio1Mobile from "../images/projects/portfolio1-mobile.jpg";
import strongerTogetherDesktop from "../images/projects/stronger-together-desktop.jpg";
import strongerTogetherMobile from "../images/projects/stronger-together-mobile.jpg";
import cabinLifeDesktop from "../images/projects/cabin-life-desktop.jpg";
import cabinLifeMobile from "../images/projects/cabin-life-mobile.jpg";
import rainyDaysDesktop from "../images/projects/rainy-days-desktop.jpg";
import rainyDaysMobile from "../images/projects/rainy-days-mobile.jpg";
import scienceMuseumDesktop from "../images/projects/science-museum-desktop.jpg";
import scienceMuseumMobile from "../images/projects/science-museum-mobile.jpg";

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
  {
    id: 4,
    projectType: "Course assignment - Portfolio",
    title: "Portfolio 1",
    description: {
      short: "Portfolio page documenting three prior submissions from the first year.",
      long: "This portfolio documents three earlier submissions from the first year: the cross-course project, Semester Project 1, and Project Exam 1.\n\nThe portfolio site includes three sections - About me, Projects and Contact.\n\nTo display the projects in the Project-section I use WordPress as a headless CMS: project entries are created and edited in the WordPress admin and exposed via the WP REST API. The frontend is a static site built with vanilla JavaScript that fetches project data from the WordPress API, renders responsive project cards. Each card includes the project title, a short description, a screenshot, and links to the GitHub repo and a live demo. Content changes made in WordPress are reflected on the frontend through the API without rebuilding the site.",
      featuresList: [
        "Project entries managed in WordPress admin (headless CMS)",
        "Frontend fetches projects from the WP REST API using vanilla JavaScript",
        "Projects displayed as responsive, accessible cards",
        "Each card contains title, description, screenshot, GitHub link and live demo link",
        "Content updates in WordPress appear on the site via the API",
      ],
      technologies: "HTML, CSS, JavaScript, WordPress REST API",
    },
    keyWords: "Vanilla JavaScript • WordPress REST API • Headless CMS",
    links: {
      git: "https://github.com/EliseAur/portfolio-elise-aurtande",
      live: "https://elise-aurtande-portfolio.netlify.app",
    },
    images: {
      desktop: portfolio1Desktop,
      mobile: portfolio1Mobile,
    },
  },
  {
    id: 5,
    projectType: "CSS Frameworks & JavaScript 2 - Social media app",
    title: "Stronger Together",
    description: {
      short:
        "A social media platform for sharing workout routines and connecting with fitness enthusiasts.",
      long: "Stronger Together is a social media platform for sharing workout routines and connecting with fitness enthusiasts. It is aresponsive front-end client built to interact with the Noroff Social API (v1). The application implements the full CRUD workflow: users can browse a feed, open individual posts, create new posts with client-side validation, edit their own posts, and delete content. Authentication follows the API requirements: users register and log in to obtain a JWT, and requests that require elevated access include an API Key; the JWT is persisted in localStorage to maintain session state. All network operations use the Fetch API and the required HTTP methods (GET, POST, PUT, DELETE) At least one core function is documented with JSDoc (argument types, return type, description and usage example) and other critical functions are commented for maintainability.",
      featuresList: [
        "User registration and login (JWT authentication)",
        "View a feed of posts and open individual posts",
        "Create new posts with client-side validation",
        "Edit and delete user's own posts (PUT/DELETE)",
        "Uses Fetch API with GET, POST, PUT and DELETE methods",
        "JWT persisted in localStorage for session management",
        "At least one function documented with JSDoc",
        "Responsive and accessible UI with loading/error states",
      ],
      technologies: "HTML, CSS, JavaScript, Bootstrap, SASS, Noroff Social API",
    },
    keyWords: "JavaScript • Bootstrap • SASS • Noroff Social API • HTML • CSS",
    links: {
      git: "https://github.com/EliseAur/workflow-css-frameworks",
      live: "https://eliseaur.github.io/workflow-css-frameworks/",
    },
    images: {
      desktop: strongerTogetherDesktop,
      mobile: strongerTogetherMobile,
    },
  },
  {
    id: 6,
    projectType: "Project Exam 1 - Create a blog site",
    title: "Cabin Life",
    description: {
      short: "A blog site showcasing the beauty of cabin life.",
      long: "This is my project Exam marking the end of my first year at Noroff. The task was to create a blog site with essential pages like Home, About, List of Blog Posts, Blog Post Specific, and Contact. The Home page features a carousel for the latest posts. Using the WordPress REST API, the Blog page displays the first 10 blogs with an option to load more. The Blog Specific page dynamically presents content based on user selection. I implemented a modal for image enlargements and used JavaScript for form validation on the Contact page. The project involved Adobe XD for design, HTML, CSS, and vanilla JavaScript for website development.",
      featuresList: [
        "Home page with a carousel showcasing the latest posts",
        "About page with personal/project information",
        "Blog listing page that fetches posts from the WordPress REST API (initially shows first 10 with 'Load more')",
        "Dynamic Blog Post page that renders content based on user selection",
        "Image modal/lightbox for enlarging post images",
        "Contact page with client-side JavaScript form validation",
        "Responsive, accessible layout implemented with HTML, CSS and vanilla JavaScript",
      ],
      technologies: "HTML, CSS, JavaScript, Bootstrap, SASS, Noroff Social API",
    },
    keyWords: "JavaScript • Bootstrap • SASS • Noroff Social API • HTML • CSS",
    links: {
      git: "https://github.com/Noroff-FEU-Assignments/project-exam-1-EliseAur",
      live: "https://teal-cat-7fe9e5.netlify.app/",
    },
    images: {
      desktop: cabinLifeDesktop,
      mobile: cabinLifeMobile,
    },
  },
  {
    id: 7,
    projectType: "Cross-course project",
    title: "Rainy Days",
    description: {
      short: "Rainy days is an E-commerce store specializing in jacket sales.",
      long: "Rainy Days is a cross-course project focused on Design, HTML/CSS, JavaScript, Interaction Design, and Content Management Systems. The project involves creating an E-commerce store specializing in jacket sales.To efficiently manage dynamic product listings, I utilized WordPress as a Headless CMS, utilizing the WordPress REST API for fetching and displaying products dynamically. To enhance user experience and user-centricity, I integrated vanilla JavaScript to incorporate interactive features like a shopping cart, favourites, and improved form interactions.",
      featuresList: [
        "Product listing page that fetches products from the WordPress REST API and renders them dynamically",
        "Product detail page with image gallery, description and price",
        "Add to cart functionality with ability to update quantity and remove items",
        "Favourites / wishlist feature for saving products",
        "Client-side form validation for contact/checkout interactions",
        "Responsive and accessible layout implemented with HTML, CSS and JavaScript",
        "Product data managed with WooCommerce plugin in Wordpress.",
      ],
      technologies: "HTML, CSS, Vanilla JavaScript, WP REST API, Wordpress (Headless CMS)",
    },
    keyWords: "VanillaJavaScript • HTML&CSS • WP REST API • Wordpress (Headless CMS)",
    links: {
      git: "https://github.com/Noroff-FEU-Assignments/cross-course-project-EliseAur",
      live: "https://reverent-babbage-1fd252.netlify.app/",
    },
    images: {
      desktop: rainyDaysDesktop,
      mobile: rainyDaysMobile,
    },
  },
  {
    id: 8,
    projectType: "Semester Project 2",
    title: "Community Science Museum",
    description: {
      short:
        "An accessible, responsive static website for the fictional Community Science Museum, designed and built with semantic HTML and CSS.",
      long: "The Community Science Museum project involved designing and building a static website for a fictional museum with a strong focus on visual design and accessibility. I created a style tile and interactive prototype in Adobe XD to define the visual language and user flow, targeting children, young adults, researchers, teachers and students. The development phase used semantic HTML and CSS only — no JavaScript — and prioritised responsive layouts and adherence to WCAG guidelines to ensure the site is usable across devices and by people with diverse accessibility needs.",
      featuresList: [
        "Design and prototyping in Adobe XD (style tile and interactive prototype)",
        "Semantic HTML and CSS implementation (no JavaScript)",
        "Responsive layout optimized for mobile, tablet and desktop",
        "WCAG-informed design and accessible markup (focus, contrast and semantic structure)",
        "Targeted content and UX for children, students, teachers, researchers and young adults",
      ],
      technologies: "HTML, CSS",
    },
    keyWords: " HTML & CSS • Adobe XD • Accessibility • Responsive Design",
    links: {
      git: "https://github.com/EliseAur/semester-project-csm",
      live: "https://extraordinary-horse-1f53a0.netlify.app/",
    },
    images: {
      desktop: scienceMuseumDesktop,
      mobile: scienceMuseumMobile,
    },
  },
];

export default projects;
