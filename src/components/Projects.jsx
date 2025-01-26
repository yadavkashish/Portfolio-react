import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Responsive Portfolio",
    technologies: "HTML, CSS, JavaScript, Responsive Design",
    date: "May 2024",
    description: [
      "Designed interactive flip card animations to highlight key information, boosting engagement by 15%.",
      "Developed a responsive contact form with validation to enhance lead generation.",
      "Developed hover effects and animations that increased user interaction time by 30 seconds per session."
    ],
    image: "https://media-hosting.imagekit.io//6ae7b583070d473a/Screenshot%202025-01-26%20191101.png?Expires=1832507169&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zocvptnTHxNJ0hJjZB7hM5vbKp0UCzJSeheb442lJsNg1nX~~mq4FhVXpC9RIxRTO30sO83IpYMDjNrt1apy7oguQ2QiJj6hNlwy6bk5KhN-z~ngWOL9QfAFZTyZcOQG0RlteozjmabbY5tu6odQidbS4FoqP4-tzP7u-d-xqqRNXorDJQ6D4Y4BYWoNse~403ON-OCMB4AegbA2-vajZOsP31RDUSpCgjq7G6WBjGazvu1JjM3BlKiYl6IxUJjbtNR4JntiFW3CUCHYMBpm74ALuoZUpxHSToJiEW32xiAelz9c0Xw~uMmXd1hd2YoJCfLiZ3U36rKX1yKFRiP2KA__",
    link: "https://yadavkashish.github.io/Kashish-Portfolio/"
  },
  {
    title: "Painting Website",
    technologies: "HTML, CSS, JavaScript, DOM Manipulation",
    date: "July 2024",
    description: [
      "Implemented a full bucket tool to simplify color-filling functionality, enhancing usability for diverse users.",
      "Developed an adjustable eraser tool and customizable brush sizes, increasing user engagement by 20%.",
      "Leveraged DOM manipulation techniques to create a responsive and interactive user interface."
    ],
    image: "https://media-hosting.imagekit.io//8a64888dc9c74a1d/Screenshot%202025-01-26%20191206.png?Expires=1832507168&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Eh1oMF0timvbPfdJIylPyCcPUTHloqywURaIaksYUGn7UmHIOhXXur3CmX7GxvdTVT6Fvc8yZINF~PDnzgME7L1hOmlTdXE8t94lE9YxLNmUiq~kgGDvbH0v6vgSG5n1UbTgNauS7BTnKztuESk9FOFNDDTwgWd6nT9s-P9t3YujVzZ5BLzpo1wwLsVseMFpNETJ6TmVEDdk0dNCm-~wHuJp8L3Vdw6cyWk-W9LFo~VFV3QJvcYOsxDZ8W5NIiy3b8uUv0tl3bQ7yfUlOu5HuMM4ooCHpM1O19YHeWi1y8thpETzKE0qiWcHGPw7ccRpEFF~vQ4-8vGTI-PUApyRPQ__",
    link: "https://yadavkashish.github.io/Painting-Project-/"
  },
  {
    title: "Safe City Project",
    technologies: "HTML, CSS, JavaScript, Bootstrap, Node.js, MongoDB",
    date: "November 2024",
    description: [
      "Designed and implemented map navigation and real-time tracking systems, improving safety measures for travelers.",
      "Crafted an intuitive emergency alert protocol that allowed users to send alerts in less than 3 seconds.",
      "Collaborated as a frontend developer to create an intuitive user experience that attracted over 200 participants."
    ],
    image: "https://media-hosting.imagekit.io//91c3fe037e7b4558/Screenshot%202025-01-26%20191407.png?Expires=1832507163&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lj4J5mqDeCf9WOoCeocZX6dHxIJnGLrSqVaKkB4ywARfocpha3jOfTV3aW8YIUYfcLAfApngBMsMXamMzgIkp6JcvbwCYktbt5qZMVK5n8o4~9~OXOzaKoXTFCNywXYUPs2wUMOS8yVaFd6UB3U8zPSrf6Ag4hEVmru3Ji1aO8MczM1nKNei~cUhoDlObhBGGCwO7cXctyhQBKSTE-mmkDfJtpSJuBB0i5m14dHF4HYnKdT1el16sK-txZOVvKyphF5y-5ygK9PnyntMZ3Enoqmcyg7IvahpTVqggTjqEChUy81VInGAoeN1GdNGLL7g7kIQQZOxOSE6iKOLu8ZGFA__",
    link: "https://innotech-project.onrender.com/home"
  },
  {
    title: "Food Delivery App",
    technologies: "HTML, CSS, JavaScript, React, Redux, React Router",
    date: "January 2025",
    description: [
      "Designed a responsive food delivery platform, ensuring a seamless experience across mobile and desktop devices.",
      "Built an intuitive interface for browsing menus, enabling users to efficiently discover and select food items.",
      "Integrated Redux for efficient state management, streamlining cart operations such as adding, removing, and tracking items.",
      "Leveraged React Router for smooth and dynamic navigation, reducing page load times and enhancing user engagement.",
      "Crafted a user-friendly checkout flow, boosting successful order completions by 25%."
    ],
    image: "https://media-hosting.imagekit.io//8bf208ebbfc44f0d/Screenshot%202025-01-26%20191514.png?Expires=1832507158&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HY~g3v9Mezv9~2vxHUkkK80sEwX3otwaoy5Yzsl7WvN-TPsMFkAjBesfQhylEEho5rZhrVnIO-h2jr8v72YQWN46Y71~qFXoKDOteDYiKPzTVxLVzIjNmYRfId3ohiTt5mAOjTXc9RQT~xS6~jNK2FAK4QBIfKvTSvCD1Z4ibA1xnqEmkEYNRAIZDLbIYGq1PdCFo6cETYf4dn57cbyJFIkDU7wyftslff9xIrKNaLuPfXBr7TVweSZxIanv4ucVKoiByqKDl8pnJkSa974QCYZn0wwL3VjgVbpdsOf8JLax6fx2aTwvig7ZegZbUXybbMgRDN23Aym0w4322EJLvA__",
    link: " https://kash-food-delivery-system.netlify.app/ "
  }
];

const Projects = () => {
  return (
      <div className="projects">  
        <h1 className="Heading">Projects</h1>  

    <div className="projects-container">
      
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-date">{project.date}</p>
          <p className="project-technologies">{project.technologies}</p>
          <ul className="project-description">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
