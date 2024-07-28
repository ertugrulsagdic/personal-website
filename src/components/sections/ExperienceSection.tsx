'use client';

import Container from "@/components/Container"
import { useState } from 'react';
import { Experience } from "@/util/dataTypes/experiences";


export default function ExperienceSection({translations} : {
    translations: {
        title: string;
        experiences: readonly Experience[];
    }
}) {
    const [currentExperience, setCurrentExperience] = useState(0);

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="space-y-8">
                <h1>{translations.title}</h1>
                <div className="lg:grid lg:grid-cols-4 space-y-8 lg:space-y-0 lg:space-x-4">
                    <div
                        className="flex flex-rows lg:flex-col overflow-x-auto [&::-webkit-scrollbar]:hidden">
                        {translations.experiences.map((experience, index) => (
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
                    {translations.experiences.map((experience, index) => (
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