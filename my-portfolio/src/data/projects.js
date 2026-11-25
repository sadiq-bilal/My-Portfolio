// Leave image, github and live empty until you have real values.
// image: put the file in /public/images and use '/images/file.png'.
const todo = (hint) => `[${hint}]`;

export const projects = [
  {
  id: 'developer-portfolio',
  title: 'Personal Developer Portfolio',
  description:
    'A modern, responsive personal developer portfolio built with React to showcase professional skills, featured projects, services and development journey. Includes dark and light themes, smooth animations and a functional contact form.',
  tech: [
    'React.js',
    'Vite',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'Motion (Framer Motion)',
    'Lucide React'
  ],
  image: '/images/DeveloperPortfolio.png',
  github: '',
  live: '',
  problem: todo(
    'Provides a centralized professional platform to showcase development skills, projects, experience and services while making it easy for recruiters and potential clients to get in touch.'
  ),
  built: todo(
    'Responsive portfolio with Hero, About, Skills, Projects, Services, Journey and Contact sections; sticky navigation with mobile menu; dark and light theme toggle; smooth scroll animations; interactive UI elements; contact form with validation; and responsive layouts for mobile, tablet and desktop.'
  ),
  learned: todo(
    'React component architecture, reusable components, React hooks, Tailwind CSS, theme management, responsive design, Motion animations, form handling and validation, Lucide icons, component-based styling and deploying React applications using Vercel.'
  ),
},
  {
    id: "photo-gallery",
    title: "PhotoHub - Photo Gallery",
    description:
      "A responsive photo gallery application where users can browse, search, filter, sort and explore photos, manage albums, view photo details, save favorites and perform CRUD operations.",
    tech: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Context API",
      "JavaScript",
      "REST API",
      "Vite",
    ],
    image: "/images/PhotoGallery.png",
    github:
      "https://github.com/sadiq-bilal/React-JS/tree/main/Advanced/Photo-Gallery",
    live: "https://react-js-plum-three.vercel.app/",
    problem: todo(
      "Provides an organized platform to explore, manage and save photos with an interactive gallery experience",
    ),
    built: todo(
      "Photo browsing, search, album filtering, sorting, pagination, photo details, favorites with LocalStorage, image downloads and photo management with POST, PUT and DELETE API requests",
    ),
    learned: todo(
      "React Router, Context API, useState, useEffect, useContext, API integration, async/await, CRUD operations, form validation and responsive UI development",
    ),
  },
  {
  id: 'shopease-ecommerce',
  title: 'ShopEase - E-Commerce Website',
  description:
    'A responsive e-commerce website built with React that allows users to browse products, search, filter and sort items, explore product details, manage their shopping cart and place orders through a smooth shopping experience.',
  tech: [
    'React.js',
    'Vite',
    'CSS',
    'React Router',
    'JavaScript',
    'Context API',
    'LocalStorage'
  ],
  image: '/images/ShopEase.png',
  github: 'https://github.com/sadiq-bilal/React-JS/tree/main/Advanced/E-Commerce',
  live: 'https://react-js-vq7j.vercel.app/',
  problem: todo(
    'Provides users with a simple and convenient online shopping experience where they can discover products, manage their cart and complete orders through an intuitive interface.'
  ),
  built: todo(
    'Responsive home page with hero slider; product listing with search, category filtering and sorting; individual product details pages; shopping cart with add, remove and quantity management; persistent cart using LocalStorage; checkout form with validation; order confirmation page; user profile page; dark mode and online/offline status detection with an offline notification.'
  ),
  learned: todo(
    'React component architecture, props, useState, useEffect, useContext, Context API for global state management, React Router, dynamic routing with useParams, navigation with useNavigate, URL search parameters, JavaScript array methods, CRUD operations, form validation, LocalStorage integration and responsive UI development.'
  ),
},
  {
    id: "melody-music-app",
    title: "Melody - YouTube Music Clone",
    description:
      "A responsive music streaming web application inspired by YouTube Music that allows users to discover, search, play and manage songs, albums, artists and playlists with a seamless music listening experience.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "JavaScript",
      "Framer Motion",
      "Lucide React",
      "LocalStorage",
    ],
    image: "/images/Melody.png",
    github: "https://github.com/sadiq-bilal/React-JS/tree/main/Advanced/melody",
    live: "https://react-js-9q6p.vercel.app/",
    problem: todo(
      "Provides a centralized music streaming experience where users can discover music, organize their favorite songs and control playback through an interactive interface.",
    ),
    built: todo(
      "Home, search, library, album, artist and playlist pages; persistent audio player; play/pause, next/previous, seek bar, volume control, shuffle, repeat, queue management, liked songs, recently played history, keyboard shortcuts and responsive navigation.",
    ),
    learned: todo(
      "React component architecture, React Router, state management, audio playback functionality, LocalStorage for data persistence, Tailwind CSS, Framer Motion animations, responsive design and building interactive user interfaces.",
    ),
  },
  {
    id: "clientbook-crm",
    title: "ClientBook - CRM Management System",
    description:
      "A responsive customer relationship management (CRM) application that helps users manage customers, track deals, organize follow-up tasks and monitor business activities through a clean and intuitive dashboard.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "JavaScript",
      "Context API",
      "LocalStorage",
    ],
    image: "/images/ClientBook.png",
    github: "https://github.com/sadiq-bilal/React-JS/tree/main/Advanced/clientbook",
    live: "https://clientbook-sigma.vercel.app",
    problem: todo(
      "Helps businesses organize customer information, track sales opportunities and manage follow-up activities in one centralized platform.",
    ),
    built: todo(
      "Interactive dashboard with customer statistics, deals overview and recent activities; customer management with search, status filtering and CRUD operations; customer details pages; deals management with list and board views; follow-up task management with due dates, completion tracking and overdue highlighting; demo login, form validation, responsive navigation and dark mode with LocalStorage data persistence.",
    ),
    learned: todo(
      "React component architecture, React Router, reusable components, state management, Context API, custom hooks, CRUD operations, LocalStorage integration, form validation, conditional rendering, responsive UI development and implementing dark mode.",
    ),
  },
   {
    id: "weather-app",
    title: "Weather Forecast Application",
    description:
      "A responsive weather application that displays current weather conditions, temperature, humidity and wind speed using a weather API.",
    tech: ["React.js", "JavaScript", "CSS", "Weather API"],
    image: "/images/WeatherApp.png",
    github:
      "https://github.com/sadiq-bilal/React-JS/tree/main/Intermediate/Weather_App",
    live: "https://react-js-razy.vercel.app/",
    problem: todo(
      "Helps users quickly check weather conditions for different locations",
    ),
    built: todo(
      "City search, weather API integration, temperature and weather details",
    ),
    learned: todo("Fetching APIs, useEffect, async/await and error handling"),
  },
  // {
  //   id: "crud-application",
  //   title: "CRUD Management Application",
  //   description:
  //     "A data management application that allows users to create, view, update and delete records through an interactive interface.",
  //   tech: ["React.js", "JavaScript", "CSS"],
  //   image: "/images/CRUD-App.png",
  //   github: "",
  //   live: "",
  //   problem: todo("Simplifies managing and organizing records in one place"),
  //   built: todo("Add, edit, delete, view records and form validation"),
  //   learned: todo(
  //     "CRUD operations, useState, component communication and form handling",
  //   ),
  // },
  // {
  //   id: "movie-search-app",
  //   title: "Movie Search Application",
  //   description:
  //     "A movie discovery application that allows users to search movies, explore details, view ratings and browse movie information using an external API.",
  //   tech: ["React.js", "JavaScript", "CSS", "REST API"],
  //   image: "/images/movieSearch.png",
  //   github: "",
  //   live: "",
  //   problem: todo(
  //     "Helps users discover movies and find movie information easily",
  //   ),
  //   built: todo(
  //     "Movie search, API integration, movie details, loading and error states",
  //   ),
  //   learned: todo(
  //     "API integration, useEffect, async/await and conditional rendering",
  //   ),
  // },
  {
  id: 'rock-paper-scissors',
  title: 'Rock Paper Scissors - Game',
  description:
    'A responsive Rock Paper Scissors game built with React that allows users to play against the computer, track scores in real time and view interactive results based on each round.',
  tech: [
    'React.js',
    'React 19',
    'Vite',
    'Tailwind CSS',
    'JavaScript (ES6+)'
  ],
  image: '/images/RockPaperScissors.png',
  github: 'https://github.com/sadiq-bilal/React-JS/tree/main/Intermediate/rps-react',
  live: 'https://react-js-5mlu.vercel.app/',
  problem: todo(
    'Provides a simple and interactive gaming experience where users can play the classic Rock Paper Scissors game against a computer opponent.'
  ),
  built: todo(
    'Interactive Rock, Paper and Scissors selection buttons; random computer choice generation; game logic to determine winners; live score tracking for player and computer; colour-coded result messages for wins, losses and draws; and a responsive user interface.'
  ),
  learned: todo(
    'React component architecture, props, useState, event handling, conditional rendering, JavaScript Math.random(), game logic implementation, reusable components and responsive UI development using Tailwind CSS.'
  ),
},
];
