import Container from "@/components/Container"
import { NewTabIcon } from "../icons/NewTabIcon";
import Image from 'next/image';


type Project = {
    title: string;
    description: string;
    link: Link;
    techStack: string[];
    logo?: string;
}

type Link = {
    title: string;
    url: string;
    isIntenal?: boolean;
}

const Projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'Designed and developed a personal portfolio website using Next.js and Tailwind CSS.',
        link: {
            title: 'esagdic.com',
            url: '',
            isIntenal: true,
        },
        techStack: ['Next.js', 'Tailwind CSS', 'Typescript'],
        logo: 'logo-dark.png',
    },
    {
        title: 'DevGPT Mining Challenge',
        description: 'Performed topic modeling on developer interactions with ChatGPT to identify common discussion themes.',
        link: {
            title: 'github.com',
            url: 'https://github.com/ertugrulsagdic/mining-challange'
        },
        techStack: ['Python', 'Data Analysis', 'NLP'],
    },
    {
        title: 'Cat Facts WebApp',
        description: 'A website that displays random cat facts using HTMX and Flask by using the Cat Facts API.',
        link: {
            title: 'github.com',
            url: 'https://github.com/ertugrulsagdic/cat-facts-app',
        },
        techStack: ['Python', 'Flask', 'HTMX'],
    },
    {
        title: 'WaSeat Transport App',
        description: 'Mobile app for tracking transportation routes and carbon footprint. Achieved 2nd place in the Flutter hackathon.',
        link: {
            title: 'github.com',
            url: 'https://github.com/ertugrulsagdic/waseat',
        },
        techStack: ['Flutter', 'Dart', 'Firebase'],
        logo: 'waseat-logo.png',
    },
    {
        title: 'Flutter Code Generator',
        description: 'A VS Code extension to automate Flutter architecture file generation for Flutter applications.',
        link: {
            title: 'github.com',
            url: 'https://github.com/ertugrulsagdic/flutter_code_generator',
        },
        techStack: ['Javascript', 'VS Code Extension'],
    },
    {
        title: 'Ahtapot Marin Website',
        description: 'A responsive website with React, featuring product listings, and contact information.',
        link: {
            title: 'ahtopotmarin.com',
            url: 'https://www.ahtopotmarin.com/',
        },
        techStack: ['React', 'CSS', 'Firebase'],
        logo: 'ahtapotmarin-logo.png',
    },
    {
        title: 'Cancer Detection using Gene Expressions',
        description: 'Analyzed gene expression changes in thyroid cancer using data science techniques.',
        link: {
            title: 'github.com',
            url: 'https://github.com/ertugrulsagdic/cancer-detection',
        },
        techStack: ['Python', 'Data Analysis', 'Machine Learning'],
    },
    {
        title: 'CPU Digital Logic Design',
        description: 'Basic CPU with 18-bit data size and 16 registers, capable of executing instruction sets using Verilog and Logism.',
        link: {
            title: 'github.com',
            url: 'https://github.com/ertugrulsagdic/DigitalDesignProject',
        },
        techStack: ['Verilog', 'Logism', 'Digital Logic'],
    }
];


export default function WorkSection() {
    const imageContext = (require as any).context('@/images/logos', true);
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="space-y-12">
                <h1>Some Projects I&apos;ve worked on</h1>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-12 gap-x-12 ">
                    {Projects.map(async (project) => {
                        const logo = project.logo ? imageContext(`./${project.logo}`).default : imageContext('./github.png').default;

                        return <div
                            key={project.title}
                            className="group relative flex flex-col items-start pt-4"
                        >
                            <div className="space-y-5 z-10">
                                <div className="relative z-10 flex h-16 w-16 p-2 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                    <Image
                                        src={logo}
                                        alt={`Logo of ${project.title}`}
                                        className="h-10 w-10 object-contain p-1 rounded-full"
                                        unoptimized
                                    />
                                </div>
                                <h6 className="relative z-10">{project.title}</h6>
                                <p className="relative z-10">{project.description}</p>
                                <ul className="relative z-10 mt-6 flex flex-wrap gap-1 mb-6">
                                    {project.techStack.map((tech) => (
                                        <li
                                            key={tech}
                                            className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:text-primary"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <div>
                                    <span className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                                    <a
                                        href={project.link.url}
                                        target={project.link.isIntenal ? '_self' : '_blank'}
                                    >
                                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                        <span className="relative z-10">
                                            <div className="flex items-center space-x-2 text-primary dark:text-primary-light">
                                                <p>{project.link.title}</p>
                                                <NewTabIcon className="h-4 w-4" />
                                            </div>
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    }
                    )}
                </div>
            </div>
        </Container>
    )
}