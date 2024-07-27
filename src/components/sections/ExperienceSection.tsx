'use client';

import Container from "@/components/Container"
import { useState } from 'react';

type Experience = {
    company: string;
    companyLink?: string;
    position: string;
    date: string;
    bullets: Bullet[];
}

type Bullet = {
    description: string;
    subDescriptions?: string[];
}

const Experiences: Experience[] = [
    {
        company: 'Lamar University',
        companyLink: 'https://www.lamar.edu/arts-sciences/computer-science/index.html',
        position: 'Research Assistant',
        date: 'January 2023 - Present',
        bullets: [
            {
                description: 'Development and Analysis of Anomaly Detection Systems for Buckeye Partners Supervised by Dr. Zhang:',
                subDescriptions: [
                    'Collaborated with Buckeye to analyze pump sensor data, achieving a comprehensive dataset for anomaly detection.',
                    'Developed and fine-tuned various machine learning models for real-time anomaly detection, using a verified dataset.',
                    'Implemented a web-based UI with RESTful APIs, enabling predictive maintenance alerts based on model outputs.',
                ],
            },
            {
                description: 'Development of Dataset Generator and Evaluation of Deep Learning Models Supervised by Dr. Kockara',
                subDescriptions: [
                    'Engineered TBPGen with C# and Unity Engine, generating 1,398 diverse total body photography images.',
                    'Evaluated skin lesion detection and segmentation using Python/Pytorch across 13 deep learning models.',
                    'Achieved 90% of IoU and F1 scores, demonstrating the TBPGen dataset’s enhancement in detection and segmentation accuracy.',
                ]
            }
        ]
    },
    {
        company: 'MDP Group',
        companyLink: 'https://www.mdpgroup.com/',
        position: 'Full Stack Software Engineer',
        date: 'July 2021 - January 2023',
        bullets: [
            {
                description: 'Engineered the Continuous Improvement Software as a full-stack engineer using Node JS and React JS, serving over 1,000 users across four companies.',
            },
            {
                description: 'Implemented Suggestion, Kaizen, and Near Miss workflows that transitioned processes to paperless and reducing process time by 60%.',
            },
            {
                description: 'Designed and maintained over 200 JSON APIs and 25+ user interfaces, enhancing system interactivity and user experience.',
            },
            {
                description: 'Managed the project with Jira using agile methodologies, leading the team to achieve 100% on-time task delivery and a 25% increase in productivity.',
            }
        ]
    },
    {
        company: 'Crenno',
        position: 'Mobile Software Engineer',
        date: 'November 2020 - April 2021',
        bullets: [
            {
                description: 'Designed and implemented 15+ user interfaces for mobile applications using Dart/Flutter, enhancing user interaction and engagement.',
            },
            {
                description: 'Acquired in-depth knowledge and practical expertise in Git for version control, significantly enhancing team workflow and reducing merge conflicts by 60%.',
            }
        ]
    },
]

export default function ExperienceSection() {
    const [currentExperience, setCurrentExperience] = useState(0);

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="space-y-8">
                <h1>My Professional experience</h1>
                <div className="lg:grid lg:grid-cols-4 space-y-8 lg:space-y-0 lg:space-x-4">
                    <div
                        className="flex flex-rows lg:flex-col overflow-x-auto [&::-webkit-scrollbar]:hidden">
                        {Experiences.map((experience, index) => (
                            <button
                                key={experience.company}
                                className={`space-y-2 ring-color-500 border-b py-4 px-6 dark:hover:bg-zinc-700 hover:bg-zinc-200 hover:text-black dark:hover:text-white
                                    ${currentExperience === index ? ' border-black dark:border-zinc-100 text-black dark:text-white' : 'dark:border-zinc-500 border-zinc-300'}
                                    lg:border-l min-w-fit lg:border-b-0
                                    `}
                                onClick={() => setCurrentExperience(index)}
                            >
                                <span>{experience.company}</span>
                            </button>
                        ))}
                    </div>
                    {Experiences.map((experience, index) => (
                        <div
                            key={experience.company}
                            className={`lg:ml-8 animate-fade col-span-3 space-y-4 ${currentExperience === index ? '' : 'hidden'}`}
                        >
                            <div>
                                <div className="flex flex-rows space-x-2">
                                    <h4 className="dark:text-zinc-400 text-zinc-600">{experience.position}</h4>
                                    <h4>
                                        @
                                        <a
                                            href={experience.companyLink}
                                            target="_blank"
                                        >
                                            {experience.company}
                                        </a>
                                    </h4>
                                </div>
                                <p>{experience.date}</p>
                            </div>
                            <ul className="relative pl-2 space-y-3">
                                {experience.bullets.map((bullet, index) => (
                                    <li
                                        className="before:content-['▹'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7"
                                        key={index}
                                    >
                                        {bullet.description}
                                        {(bullet.subDescriptions &&
                                            <ul className="space-y-2">
                                                {bullet.subDescriptions?.map((subDescription, index) => (
                                                    <li
                                                        className="relative before:content-['•'] before:text-black dark:before:text-white before:absolute before:left-0 pl-7"
                                                        key={index}>{subDescription}</li>
                                                ))}
                                            </ul>
                                        )}

                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}