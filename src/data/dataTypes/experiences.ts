export type Experience = {
    company: string;
    companyLink?: string;
    position: string;
    date: string;
    location: string;
    bullets: Bullet[];
}

type Bullet = {
    description: string;
    subDescriptions?: string[];
}