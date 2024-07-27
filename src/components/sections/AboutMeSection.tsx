import Container from "@/components/Container"
import Image from 'next/image'
import ProfilePicture from '@/images/ertugrul.jpeg'
import { NewTabIcon } from "../icons/NewTabIcon";

const Skills: string[] = [
    'Python',
    'TensorFlow',
    'PyTorch',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'SQL (PostgreSQL)',
    'NoSQL (MongoDB)',
    'Docker',
    'Git',
    'Agile',
];

export default function AboutMeSection() {
    return (
        <Container className="mt-16 sm:mt-32 ">
            <div className="space-y-8">
                <h1>More about me</h1>
                <div className="space-y-4 max-w-4xl">
                    <p>
                        From the vibrant streets of Istanbul to the scholarly corridors of Lamar University in Texas, my software engineering journey is marked by a relentless pursuit of knowledge and innovation. Holding a Bachelor’s degree in Computer Science from Marmara University and Master’s at Lamar University, I am deeply committed to advancing in technology and software development.
                    </p>
                    <p>
                        Away from the keyboard, you might find me delving into the latest tech trends, lifting weights at the gym, enjoying a good book, or unwinding with my favorite TV shows. I believe in maintaining a balanced life to fuel creativity and innovation.
                    </p>
                    <p>
                        Throughout my career, I&apos;ve navigated through diverse roles that have each contributed to my development:
                    </p>
                    <ul className="space-y-2">
                        <li className="relative before:content-['•'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7">
                            <p>
                                <strong>Mobile Development: </strong> Engineered intuitive mobile interfaces to enhance user experience and functionality.
                            </p>
                        </li>
                        <li className="relative before:content-['•'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7">
                            <p >
                                <strong>Software Engineering: </strong> As a key developer on the
                                <a href="https://oneri.io/en/" target="_blank" className="inline-flex items-center mx-1 space-x-1 text-primary dark:text-primary-light">
                                    <strong>Continuous Improvement Software</strong>
                                    <NewTabIcon className="h-4 w-4" />
                                </a>
                                project, I implemented over 200 API endpoints and numerous user interfaces to automate suggestion, kaizen, and near-miss workflows.
                            </p>
                        </li>
                        <li className="relative before:content-['•'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7">
                            <p>
                                <strong>Machine Learning Research: </strong> Created a novel dataset generator for skin lesion analysis and developed real-time anomaly detection algorithms, pushing the boundaries of AI.
                            </p>
                        </li>
                    </ul>

                    <p>
                        Each role has been a stepping stone towards a deeper understanding of the technical aspects of software development. My goal is always to build software that every line of code not only functional but also impactful
                    </p>
                    <p>
                        Here are a the technologies I’ve been working with recently:
                    </p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {Skills.map((skill) => (
                            <li className="before:content-['▹']" key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    )
}