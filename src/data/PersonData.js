import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const userData = {
  name: "Praneeth Katuri",
  FooterLink: "https://www.linkedin.com/in/praneeth-katuri/",
  about:
    "I'm a self-taught MERN stack developer who loves building full-stack web apps that are fast, functional, and user-friendly. I work with MongoDB, Express, React, and Node.js to create everything from clean, responsive frontends to solid, secure backends. I'm comfortable working across the entire stack, whether it’s designing REST APIs, managing data, or building out sleek UIs. I’m also big on writing clean, maintainable code and using Git to keep everything organized. What drives me most is solving real problems with smart, practical solutions — and pushing myself to learn and build better every day.",
  socialMedia: [
    {
      platformName: "GitHub",
      url: "https://github.com/praneeth-katuri",
      icon: FaGithub,
    },
    {
      platformName: "LinkedIn",
      url: "https://www.linkedin.com/in/praneeth-katuri/",
      icon: FaLinkedin,
    },
    {
      platformName: "Discord",
      url: "",
      icon: FaDiscord,
    },
  ],
};

export default userData;
