import { Experience } from "@/util/dataTypes/experiences";
import { Project } from "@/util/dataTypes/project";

export default {
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
            experiences: [
                {
                    company: "Lamar University",
                    companyLink: "https://www.lamar.edu/arts-sciences/computer-science/index.html",
                    position: "Research Assistant",
                    date: "January 2023 - Present",
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
        },
        projects: {
            title: "Some Projects I've worked on",
        }
    },
    allProjects: {
        projects: [
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
    articles: {
        hero: {
            title: "Articles",
            description: "I write about software engineering, machine learning, and personal development. Here are some of my latest articles:"
        }
    },
    projects: {
        hero: {
            title: "Projects",
            description: "Here are some of the projects I've worked on. Click on the cards to learn more about each project."
        },
    },
    tools: {
        hero: {
            title: "Tools",
            description: "Here are some of the tools I use in my daily workflow:"
        }
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