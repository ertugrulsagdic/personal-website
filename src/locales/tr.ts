import { Education } from "@/data/dataTypes/education";
import { Experience } from "@/data/dataTypes/experiences";
import { Project } from "@/data/dataTypes/project";
import { ToolCategory } from "@/data/dataTypes/ToolCategory";

export default {
  info: {
    name: "Ertugrul Sagdic",
    location: "Houston, TX, USA",
    locationLink: "https://www.google.com/maps/place/Houston,+TX",
    email: "ertugrulsagdic98@gmail.com",
    mobile: "+1 (409) 867 4970",
    about: "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  },
  navbar: {
    articles: "Articles",
    projects: "Projects",
    tools: "Tools",
    resume: "Resume",
    toggleTheme: "Toggle Theme",
    changeLanguage: "Change Language",
  },
  home: {
    hero: {
      greeting: "Hi there",
      title: "I'm Ertugrul Sagdic",
      subtitle: "Software Engineer",
      description: "I build software with a passion to make a meaningful impact with every line of code. My engineering journey is defined by pushing boundaries in research, progress, and continuous improvement.",
      pictureAlt: "Profile Picture"
    },
    aboutMe: {
      title: "More about me",
      intro: "From the vibrant streets of Istanbul to the scholarly corridors of Lamar University in Texas, my software engineering journey is marked by a relentless pursuit of knowledge and innovation. Holding a Bachelor’s degree in Computer Science from Marmara University and Master’s at Lamar University, I am deeply committed to advancing in technology and software development.",
      hobbies: "Away from the keyboard, you might find me delving into the latest tech trends, lifting weights at the gym, enjoying a good book, or unwinding with my favorite TV shows. I believe in maintaining a balanced life to fuel creativity and innovation.",
      roles: "Throughout my career, I've navigated through diverse roles that have each contributed to my development:",
      mobileDevelopment: "Mobile Development: ",
      mobileDevelopmentDescription: "Engineered intuitive mobile interfaces to enhance user experience and functionality.",
      softwareEngineering: "Software Engineering: ",
      softwareEngineeringDescriptionStart: "As a key full-stack engineer, I engineered the",
      softwareEngineeringDescriptionProject: "Continuous Improvement Software",
      softwareEngineeringDescriptionEnd: "project using Node JS and React JS to automate suggestion, kaizen, and near-miss workflows, serving over 1,000 users across four companies.",
      machineLearning: "Research in Machine Learning: ",
      machineLearningDescription: "Created a novel dataset generator for skin lesion analysis and developed real-time anomaly detection algorithms, pushing the boundaries of AI.",
      rolesEnd: "Each role has been a stepping stone towards a deeper understanding of the technical aspects of software development. My goal is always to build software that every line of code not only functional but also impactful",
      technologies: "Here are a the technologies I’ve been working with recently:"
    },
    experience: {
      title: "My Professional experience",
    },
    projects: {
      title: "Some Projects I've worked on",
    }
  },
  experiences: [
    {
      company: "Lamar University",
      companyLink: "https://www.lamar.edu/arts-sciences/computer-science/index.html",
      position: "Research Assistant",
      date: "January 2023 - Present",
      location: "Beaumont, TX, USA",
      bullets: [
        {
          description: "Development and Analysis of Anomaly Detection Systems for Buckeye Partners Supervised by Dr. Zhang:",
          subDescriptions: [
            "Collaborated with Buckeye to analyze pump sensor data, achieving a comprehensive dataset for anomaly detection.",
            "Developed and fine-tuned various machine learning models for real-time anomaly detection, using a verified dataset.",
            "Implemented a web-based UI with RESTful APIs, enabling predictive maintenance alerts based on model outputs.",
          ],
        },
        {
          description: "Development of Dataset Generator and Evaluation of Deep Learning Models Supervised by Dr. Kockara",
          subDescriptions: [
            "Engineered TBPGen with C# and Unity Engine, generating 1,398 diverse total body photography images.",
            "Evaluated skin lesion detection and segmentation using Python/Pytorch across 13 deep learning models.",
            "Achieved 90% of IoU and F1 scores, demonstrating the TBPGen dataset’s enhancement in detection and segmentation accuracy.",
          ]
        }
      ]
    },
    {
      company: "MDP Group",
      companyLink: "https://www.mdpgroup.com/",
      position: "Full Stack Software Engineer",
      date: "July 2021 - January 2023",
      location: "Istanbul, Turkey",
      bullets: [
        {
          description: "Engineered the Continuous Improvement Software as a full-stack engineer using Node JS and React JS, serving over 1,000 users across four companies.",
        },
        {
          description: "Implemented Suggestion, Kaizen, and Near Miss workflows that transitioned processes to paperless and reducing process time by 60%.",
        },
        {
          description: "Designed and maintained over 200 JSON APIs and 25+ user interfaces, enhancing system interactivity and user experience.",
        },
        {
          description: "Managed the project with Jira using agile methodologies, leading the team to achieve 100% on-time task delivery and a 25% increase in productivity.",
        }
      ]
    },
    {
      company: "Crenno",
      position: "Mobile Software Engineer",
      date: "November 2020 - April 2021",
      location: "Istanbul, Turkey",
      bullets: [
        {
          description: "Designed and implemented 15+ user interfaces for mobile applications using Dart/Flutter, enhancing user interaction and engagement.",
        },
        {
          description: "Acquired in-depth knowledge and practical expertise in Git for version control, significantly enhancing team workflow and reducing merge conflicts by 60%.",
        }
      ]
    },
  ] as Experience[],
  allProjects: {
    mostRecentProjects: [
      {
        title: "Portfolio Website",
        description: "Designed and developed a personal portfolio website using Next.js and Tailwind CSS.",
        link: {
          title: "esagdic.com",
          url: "",
          isIntenal: true,
        },
        techStack: ["Next.js", "Tailwind CSS", "Typescript"],
        logo: "logo-dark.png",
      },
      {
        title: "DevGPT Mining Challenge",
        description: "Performed topic modeling on developer interactions with ChatGPT to identify common discussion themes.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/mining-challange"
        },
        techStack: ["Python", "Data Analysis", "NLP"],
      },
      {
        title: "Cat Facts WebApp",
        description: "A website that displays random cat facts using HTMX and Flask by using the Cat Facts API.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/cat-facts-app",
        },
        techStack: ["Python", "Flask", "HTMX"],
      },
      {
        title: "WaSeat Transport App",
        description: "Mobile app for tracking transportation routes and carbon footprint. Achieved 2nd place in the Flutter hackathon.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/waseat",
        },
        techStack: ["Flutter", "Dart", "Firebase"],
        logo: "waseat-logo.png",
      },
      {
        title: "Flutter Code Generator",
        description: "A VS Code extension to automate Flutter architecture file generation for Flutter applications.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/flutter_code_generator",
        },
        techStack: ["Javascript", "VS Code Extension"],
      },
      {
        title: "Ahtapot Marin Website",
        description: "A responsive website with React, featuring product listings, and contact information.",
        link: {
          title: "ahtopotmarin.com",
          url: "https://www.ahtopotmarin.com/",
        },
        techStack: ["React", "CSS", "Firebase"],
        logo: "ahtapotmarin-logo.png",
      },

    ] as Project[],
    undergradProjects: [
      {
        title: "Cancer Detection using Gene Expressions",
        description: "Implemented cancer classification models using K-NN and Neural Network algorithms, and explored differentially expressed genes using the Rain Forest Algorithm.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/cancer-detection"
        },
        techStack: ["Python", "Machine Learning", "Data Analysis"],
      },
      {
        title: "Multithreaded Web Server",
        description: "An HTTP multithreaded web server that dynamically creates HTML objects based on client requests, including a proxy server for caching.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/Multithreaded-Web-Server"
        },
        techStack: ["Python", "Networking"],
      },
      {
        title: "CPU Digital Logic Design",
        description: "Basic CPU with 18-bit data size and 16 registers, capable of executing instruction sets using Verilog and Logism.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/DigitalDesignProject",
        },
        techStack: ["Verilog", "Logism", "Digital Logic"],
      },
      {
        title: "Park It Analysis and Design",
        description: "Designed the roadmap for 'Park It' app using the waterfall methodology, covering planning, analysis, design, and implementation stages.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/park-it-analysis-and-design"
        },
        techStack: ["Flutter", "Project Management"],
      },
      {
        title: "Reinforcement Learning Prioritized Sweeping",
        description: "Developed a reinforcement learning agent using the Prioritized Sweeping algorithm for navigating a grid world map.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/Cliff-Walking-Prioritized-Sweeping"
        },
        techStack: ["Python", "Reinforcement Learning"],
      },
      {
        title: "Online Attendance System",
        description: "An attendance management app for schools, using QR code scanning for attendance, with features for announcements and document uploads.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/OASYS"
        },
        techStack: ["React Native", "Firebase"],
      },
      {
        title: "Database and Web Application of an Airport",
        description: "Developed a database and web application for managing airport data, using MSSQL, HTML, CSS, and JavaScript with an MVC pattern.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/AirportDatabase"
        },
        techStack: ["SQL", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Monopoly Game",
        description: "Developed a simulation of the Monopoly game in Java using object-oriented principles, with iterative and evolutionary development.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/MonopolyGame"
        },
        techStack: ["Java", "Software Development"],
      },
      {
        title: "Thread Synchronization and My Own Shell",
        description: "Implemented thread synchronization and developed a custom shell in C on Linux, featuring several bespoke commands and functionalities.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/OperatingSystemsProjects"
        },
        techStack: ["C", "Systems Programming"],
      }
    ] as Project[],
  },
  educations: [
    {
      institution: "Lamar University",
      location: "Beaumont, TX, USA",
      degree: "Master of Science in Computer Science",
      date: "January 2023 - May 2024 ",
      gpa: "GPA: 4.0/4.0"
    },
    {
      institution: "Marmara University",
      location: "Istanbul, Turkey",
      degree: "Bachelor of Science in Computer Science",
      date: "September 2016 - June 2021",
      gpa: "GPA: 3.14/4.0"
    }
  ] as Education[],
  articles: {
    hero: {
      title: "Exploring Ideas: Insights on Software, AI, and Personal Growth",
      description: "Dive into my collection of articles where I share thoughts and experiences on software engineering, machine learning, and the journey of personal development. Each piece aims to provide clarity, inspiration, and practical knowledge to help you on your tech adventure.",
      emptyDescription: "I'm currently in the process of crafting articles that delve into software engineering, machine learning, and personal development. Check back soon to explore insights and stories designed to inspire and educate. I'm excited to share them with you!"
    }
  },
  projects: {
    hero: {
      title: "My Small Steps Towards Big Change",
      description: "Here's a showcase of the projects that have defined my journey so far. From mobile development to machine learning, each project represents a chapter of my ongoing adventure in tech. Many of these initiatives are open to collaboration—so if something sparks your interest, feel free to dive into the details and join me!"
    },
    mostRecentProjects: {
      title: "Most Recent Projects",
      description: "Here are some of the projects I've been working on recently"
    },
    undergradProjects: {
      title: "Undergraduate Projects",
      description: "Here are some of the projects I've worked on during my undergraduate studies"
    }
  },
  tools: {
    hero: {
      title: "My Toolkit: From Code to Creativity",
      description: "Browse through the tools that are integral to my daily workflow. From development frameworks and programming languages to project management applications, each tool is a key player in my pursuit of efficient and innovative software solutions."
    },
    toolsList: [
      {
        title: "Development Environments and Editors",
        tools: [
          {
            title: "Visual Studio Code",
            description: "Advanced integrated development environment (IDE) with support for multiple languages and extensions.",
            href: "https://code.visualstudio.com/",
            imageURL: "https://code.visualstudio.com/assets/images/code-stable.png"
          },
          {
            title: "Jupyter Notebook",
            description: "A must-have for data scientists, offering a mix of code, text, and visuals — perfect for sharing how-to's and research.",
            href: "https://jupyter.org/",
            imageURL: "https://jupyter.org/assets/logos/rectanglelogo-greytext-orangebody-greymoons.svg"
          }
        ]
      },
      {
        title: "Programming Languages",
        tools: [
          {
            title: "Python",
            description: "Versatile and powerful, it's my go-to for quick scripts, data analysis, and machine learning.",
            href: "https://www.python.org/",
            imageURL: "https://www.python.org/static/img/python-logo-large.c36dccadd999.png?1576869008"
          },
          {
            title: "JavaScript",
            description: "The backbone of the web, perfect for both front-end interactivity and back-end services.",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          },
          {
            title: "TypeScript",
            description: "JavaScript with syntax for types, it brings static type checking to web development, making the code less prone to runtime errors.",
            href: "https://www.typescriptlang.org/",
            imageURL: "https://www.typescriptlang.org/icons/icon-48x48.png"
          }
        ]
      },
      {
        title: "Web Development",
        tools: [
          {
            title: "React",
            description: "My framework of choice for building user interfaces, especially SPA that need rich interaction.",
            href: "https://reactjs.org/",
            imageURL: "https://reactjs.org/favicon.ico"
          },
          {
            title: "Node.js",
            description: "Enables me to use JavaScript on the server-side; great for building scalable network applications.",
            href: "https://nodejs.org/",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
          },
          {
            title: "Next.js",
            description: "A React framework that supports server-side rendering and static site generation, ideal for building performant web applications.",
            href: "https://nextjs.org/",
            imageURL: "https://nextjs.org/static/favicon/favicon-32x32.png"
          },
          {
            title: "Tailwind CSS",
            description: "A utility-first CSS framework that allows for rapid styling of applications without leaving your HTML.",
            href: "https://tailwindcss.com/",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
          }
        ]
      },
      {
        title: "Frameworks and Libraries for Machine Learning",
        tools: [
          {
            title: "TensorFlow",
            description: "A comprehensive platform that lets me build and train machine learning models at scale.",
            href: "https://www.tensorflow.org/",
            imageURL: "https://www.tensorflow.org/images/tf_logo_social.png"
          },
          {
            title: "PyTorch",
            description: "Known for its flexibility and ease of use, it's my preferred tool for building deep learning projects.",
            href: "https://pytorch.org/",
            imageURL: "https://pytorch.org/favicon.ico"
          },
          {
            title: "Keras",
            description: "Runs atop TensorFlow and simplifies many machine learning workflows with its high-level APIs.",
            href: "https://keras.io/",
            imageURL: "https://keras.io/img/favicon.ico"
          }
        ]
      },
      {
        title: "Data Manipulation and Analysis",
        tools: [
          {
            title: "Pandas",
            description: "Ideal for structured data operations and manipulations, it's indispensable for any data-driven task.",
            href: "https://pandas.pydata.org/",
            imageURL: "https://pandas.pydata.org/static/img/favicon.ico"
          },
          {
            title: "NumPy",
            description: "Provides support for large, multi-dimensional arrays and matrices, along with a collection of high-level mathematical functions.",
            href: "https://numpy.org/",
            imageURL: "https://numpy.org/images/favicon.ico"
          }
        ]
      },
      {
        title: "Version Control and Project Management",
        tools: [
          {
            title: "Git",
            description: "Essential for any coding project, allowing for effective version control and collaboration.",
            href: "https://git-scm.com/",
            imageURL: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          },
          {
            title: "Docker",
            description: "Helps me encapsulate my environment and share it with my team, ensuring everyone is on the same page.",
            href: "https://www.docker.com/",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png"
          },
        ]
      },
      {
        title: "Productivity and Utility Tools",
        tools: [
          {
            title: "Notion",
            description: "A powerful organizing tool, Notion helps me keep my life and projects streamlined and well-documented.",
            href: "https://www.notion.so/",
            imageURL: "https://www.notion.so/images/favicon.ico"
          },
          {
            title: "Trello",
            description: "Perfect for organizing tasks and small projects, it's like a digital bulletin board for all my ideas and activities.",
            href: "https://trello.com/",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbY1-Um96CJj5CiENgILgx12Sc6ZV-NPLdw&s"
          },
          {
            title: "Zoom",
            description: "The go-to platform for virtual meetings, it's indispensable in today's remote work environment.",
            href: "https://zoom.us/",
            imageURL: "https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png"
          },
          {
            title: "Slack",
            description: "For team communication and collaboration, Slack is the tool that keeps us connected and productive.",
            href: "https://slack.com/",
            imageURL: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png"
          },
          {
            title: "Discord",
            description: "A versatile tool for communication and community building, Discord is perfect for both personal and professional use.",
            href: "https://discord.com/",
            imageURL: "https://aoineko.org/msxgl/images/a/af/Discord_Logo.png"
          }
        ]
      },
      {
        title: "Design Tools",
        tools: [
          {
            title: "Figma",
            description: "Collaborative, powerful, and intuitive, Figma helps me design and prototype quickly and efficiently.",
            href: "https://www.figma.com/",
            imageURL: "https://static.figma.com/app/icon/1/favicon.png"
          },
          {
            title: "Canva",
            description: "Great for quickly creating aesthetic designs for web and print, Canva is a tool I often turn to for rapid visual creation.",
            href: "https://www.canva.com/",
            imageURL: "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
          }
        ]
      },
      {
        title: "Monitoring and Analysis Tools",
        tools: [
          {
            title: "Postman",
            description: "Simplifies API development by allowing me to create, test, and modify APIs easily.",
            href: "https://www.postman.com/",
            imageURL: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
          },
          {
            title: "Chrome Developer Tools",
            description: "A vital set of utilities for debugging, modifying, and optimizing my web applications.",
            href: "https://developer.chrome.com/docs/devtools/",
            imageURL: "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-1024x1024-bgoqb03p.png"
          }
        ]
      }
    ] as ToolCategory[],
  },
  resume: {
    hero: {
      title: "Resume",
      description: "Here is my resume. You can also download it as a PDF."
    }
  },
  footer: {
    title: "© 2024 Ertugrul Sagdic",
    description: "Created with Next.js, Tailwind CSS, and TypeScript"
  }
} as const;