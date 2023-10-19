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
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    BVB,
    Rai,
    Retail,
    ICTindebuurt,
    ginmido,
    threejs,
    dwd,
    underconstruction,
    lavaScreenshot,
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
      id: "slider",
      title: "My Gallery",
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React",
      icon: mobile,
    },
    {
      title: "Unity",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Retail Manager",
      company_name: "Multiple Companies",
      icon: Retail,
      iconBg: "#383E56",
      date: "2000 - 2014",
      points: [
        "Started as a assistent.",
        "Studied for Retail Manager.",
        "Became Retail manager",
        "Brought stores to a number one position in the country.",
      ],
    },
    {
      title: "Frontoffice coordinator",
      company_name: "Rai Amsterdam",
      icon: Rai,
      iconBg: "#E6DEDD",
      date: "Jan 2015 - Dec 2019",
      points: [
        "Rai Amsterdam is a event and congress venue",
        "Started as service employee",
        "Ellected employee of the year",
        "Promoted to Frontoffice coordinator",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ICT-indebuurt",
      icon: ICTindebuurt,
      iconBg: "#383E56",
      date: "Jun 2020 - Jan 2022",
      points: [
        "Developing and maintaining web applications",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "F&B Supervisor, SoftwareDeveloper",
      company_name: "Beurs Van Berlage",
      icon: BVB,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Sep 2023",
      points: [
        "As Supervisor managed between 5 to 25 employees",
        "Created logistic solutions",
        "Trained new staff",
        "Created Training applications for new staff",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "GinMido.nl",
      description:
        "A gaming company website with cookie consent, log in portal and database, made mainly with html and css.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: ginmido,
      source_code_link: "https://github.com/",
    },
    {
      name: "deWildeDevelopment.nl",
      description:
        "A portfolio website with 3D elements",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: dwd,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project LAVA",
      description:
        "A  Online Multiplayer game made in Unity, development still in progres, come back for more news.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: lavaScreenshot,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };