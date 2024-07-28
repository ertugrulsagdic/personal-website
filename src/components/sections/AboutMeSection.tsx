import Container from "@/components/Container"
import { NewTabIcon } from "../icons/NewTabIcon";
import Link from "next/link";

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

export default function AboutMeSection({translations}: {
    translations: {
        title: string,
        intro: string,
        hobbies: string,
        roles: string,
        mobileDevelopment: string,
        mobileDevelopmentDescription: string,
        softwareEngineering: string,
        softwareEngineeringDescriptionStart: string,
        softwareEngineeringDescriptionProject: string,
        softwareEngineeringDescriptionEnd: string,
        machineLearning: string,
        machineLearningDescription: string,
        rolesEnd: string,
        technologies: string,
    }
}
) {
    return (
        <Container className="mt-16 sm:mt-32 ">
            <div className="space-y-8">
                <h1>{translations.title}</h1>
                <div className="space-y-4 max-w-4xl">
                    <p>{translations.intro}</p>
                    <p>{translations.hobbies}</p>
                    <p>{translations.roles}</p>
                    <ul className="space-y-2">
                        <li className="relative before:content-['•'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7">
                            <p>
                                <strong>{translations.mobileDevelopment}</strong> 
                                {translations.mobileDevelopmentDescription}
                            </p>
                        </li>
                        <li className="relative before:content-['•'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7">
                            <p>
                                <strong>{translations.softwareEngineering}</strong> 
                                {translations.softwareEngineeringDescriptionStart}
                                <Link href="https://oneri.io" target="_blank" className="mx-1">
                                    <strong>{translations.softwareEngineeringDescriptionProject}</strong>
                                </Link>
                                {translations.softwareEngineeringDescriptionEnd}
                            </p>
                        </li>
                        <li className="relative before:content-['•'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7">
                            <p>
                                <strong>{translations.machineLearning}</strong> 
                                {translations.machineLearningDescription}
                            </p>
                        </li>
                    </ul>

                    <p>
                        {translations.rolesEnd}
                    </p>
                    <p>
                        {translations.technologies}
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