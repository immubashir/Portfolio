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
    coding,
    cloud,
    social,
    metaverse,
    socialmed,
    portfolio,
    genius,
    threads,
    sumz,
    python,
    c,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Digital Artist",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
   { 
    name: "python",
    icon: python,
   },
   { 
    name: "C++",
    icon: c,
   },
  ];
  
  const experiences = [
    {
      title: "Research Intern - Machine Learning",
      company_name: "CMR Technical Campus",
      icon: coding,
      iconBg: "#E6DEDD",
      date: "April 2021 - May 2022",
      points: [
        "A research on Filtering spam SMS (using Machine Learning algorithms) under the guidance of Dr. D.T.V. Dharmajee Rao Professor & Dean Academics.",
        "This research comprises of collecting various text messages and analyzing them using Machine Learning methods such as Data Collection and Data pre-processing, and applying classification methods on available SMS dataset.",
        "The dataset contains 5,574 SMS Text messages(in English) real and non-encoded messages.",
        "These messages were then classified as either Legitimate (ham) or spam.",
      ],
    },
    {
      title: "Research Intern - Cloud Computing",
      company_name: "Zion Techno Solutions & EDTech",
      icon: cloud,
      iconBg: "#383E56",
      date: "June 2020 - July 2021",
      points: [
        "A 20-hour Research on Cloud Computing and Technologies, doing a research on various applications and services provided by cloud computing.",
        "The first objective was to look into various sources containing the information regarding the cloud services and how they have evolved over time, as well as how the users of clouds have been exponentially growing.",
        "The next main objective was to look into the security concerns and giving out my ideas on how they can be resolved.",
        "Developed an insight on various implementations by different companies on Cloud computing services (Such as Amazon, Apple, Microsoft, Google, Meta, etc..).",
      ],
    },
    {
      title: "Research Intern - Social Media Management",
      company_name: "Zion Techno Solutions & EDTech",
      icon: social,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Sept 2022",
      points: [
        "A 20-hour research on Personal Social Media Management.",
        "Looking into the evolution of social media through time, how social media helped influencing the market and making social media an absolute necessity in today’s life.",
        "My tasks were to record the history and evolution of social media, taking reports on how different people use social media, how social media has influenced the business sector, conducting surveys from different users based on their experiences with social media.",
        "My reports were based on different surveys I conducted on my friends and family, and then based on those taken from the internet.",
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
      name: "Genius",
      description:
        "Converse, code, create images, videos, and music with Genius, the ultimate AI-SaaS platform. Enjoy Stripe integration for easy payments and subscription management. Elevate your genius today.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openAi",
          color: "green-text-gradient",
        },
        {
          name: "replicateAi",
          color: "pink-text-gradient",
        },
      ],
      image: genius,
      source_code_link: "https://github.com/immubashir/genius-app",
    },
    {
      name: "Threads",
      description:
        "ThreadHub, built with Next.js 13 and Tailwind CSS, enables users to create, manage, and engage in communities effortlessly. Post your thoughts and have a discussion with the rest of your team intuitively.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "clerk",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/immubashir/threads_app",
    },
    {
      name: "SocialSphere",
      description:
        "A full fledged social media app that enables users to Register/Login into the app, Add and remove friends, Post and Like the posts and A Dark/Light mode. This is a fully responsive MERN app",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "framerMotion",
          color: "pink-text-gradient",
        },
      ],
      image: socialmed,
      source_code_link: "https://github.com/immubashir/Social-media",
    },
    {
      name: "Metaversus",
      description:
        "A fully responsive Front-end web application that makes use of framer motion to include spectacular animations. It uses Tailwind CSS for stylizing the app beautifully and is based on NextJs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "framerMotion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/immubashir/Metaversus",
    },
    {
      name: "Article Summarizer",
      description:
        "Experience the future of information consumption with our cutting-edge AI-powered Article Summarizer app. Built using the lightning-fast Vite framework, our app ensures a seamless user experience.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "rapid-api",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/immubashir/ai-summarizer",
    },
    {
      name: "Porfolio",
      description:
        "My own personal portfolio app which showcases all the projects I've done till date. Portfolio is made using ReactJs, ThreeJs and Framer Motion, which is completely reactive and amazing animations!!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framerMotion",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/immubashir/Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };