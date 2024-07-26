'use client';

import Container from "@/components/Container"
import { useState } from 'react';

const Experiences = [
    {
        company: 'Company 1',
        position: 'Software Engineer',
        date: '2020 - Present',
        decriptions: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ]
    },
    {
        company: 'Company 2',
        position: 'Software Engineer',
        date: '2019 - 2020',
        decriptions: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ]
    },
    {
        company: 'Company 3',
        position: 'Software Engineer',
        date: '2018 - 2019',
        decriptions: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ]
    },
]

export default function ExperienceSection() {
    const [currentExperience, setCurrentExperience] = useState(0);

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="space-y-4">
                <h1>My Professional experience</h1>
                <div className="flex space-x-4">
                    <div className="flex flex-col">
                        {Experiences.map((experience, index) => (
                            <button
                                key={experience.company}
                                className="space-y-2"
                                onClick={() => setCurrentExperience(index)}
                            >
                                {experience.company}
                            </button>
                        ))}
                    </div>
                    {Experiences.map((experience, index) => (
                        <div
                            key={experience.company}
                            className={`animate-fade space-y-4 ${currentExperience === index ? '' : 'hidden'}`}
                        >
                            <div>
                                <div className="flex space-x-2">
                                    <h6>{experience.position}</h6>
                                    <h6>@{experience.company}</h6>
                                </div>
                                <p>{experience.date}</p>
                            </div>
                            <ul className="pl-2 space-y-3">
                                {experience.decriptions.map((description, index) => (
                                    <li 
                                        className="before:content-['▹']"
                                    key={index}>{description}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}