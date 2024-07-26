import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    java,
    nextjs,
    headstarter,
    munichre,
    algarch,
    insuranceplatform,
    pwebsite,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Artificial Intelligence",
      icon: mobile,
    },
    {
      title: "UI/UX Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter AI - Long Island, New York (Remote)",
      icon: headstarter,
      iconBg: "#E6DEDD",
      date: "July 2024 - September 2024",
      points: [
        "Built 5 AI apps and APIs using React, NextJS, OpenAI, Pinecone, StripeAPI and Firebase.",
        "Developed projects from design to deployment, leading 3 engineering fellows using MVC design patterns.",
        "Participated in mock coding interviews focused on Algorithms and Data Structures, and actively engaged in peer code reviews.",
        "Mentored by Amazon, Bloomberg and Google engineers on Agile methodologies, CI/CD, Git and microservice patterns.",
      ],
    },
    {
      title: "Frontend Engineer (Contract)",
      company_name: "Munich Re Automation Solutions Ltd - Dublin, Ireland",
      icon: munichre,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - April 2024",
      points: [
        "Developed a blockchain-based solution for smart contracts in life insurance, automating actions like premium payments and claim settlements using React, Python, and Solidity.",
        "Built and integrated key UI components with the backend via RESTful APIs, ensuring seamless data flow and user interactions.",
        "Engaged in pair programming sessions to optimise code performance, and collaborated with other teams to resolve bugs and issues.",
        "Enforced agile scrum methodology, participated in weekly sprint planning, and occasionally served as Scrum Master.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Portfolio Website",
      description:
        "A responsive 3D portfolio website that showcases my projects, skills, and experiences in a visually appealing and interactive manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: pwebsite,
      source_code_link: "https://github.com/",
    },
    {
      name: "Optimisation Algorithms",
      description:
        "A project that implements, tests, and analyses various optimisation algorithms, including Hill Climbing, Genetic Algorithms and Particle Swarm Optimisation.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "excel",
          color: "green-text-gradient",
        },
      ],
      image: algarch,
      source_code_link: "https://github.com/SebastianBuryy/CSU22012-OptimisationAlgorithms",
    },
    {
      name: "Life Insurance Platform",
      description:
        "A blockchain-based life insurance platform that utilises self-executing smart contracts to automate processes such as premium payments, and policy issuance.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "solidity",
          color: "orange-text-gradient",
        },
      ],
      image: insuranceplatform,
      source_code_link: "https://github.com/SebastianBuryy/SwEng-Group23-LifeInsurancePlatform",
    },
  ];
  


  export { services, technologies, testimonials, experiences, projects };