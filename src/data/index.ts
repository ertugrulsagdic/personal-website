import { SocialProfile } from "./dataTypes/socialProfile";

import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { XIcon } from '@/components/icons/XIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

export const resumeSocialLinks: SocialProfile[] = [
    { name: 'Github', link: 'https://github.com/ertugrulsagdic', icon: GitHubIcon },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ertugrulsagdic', icon: LinkedInIcon },
];


export const socialLinks: SocialProfile[] = [
    { name: 'Twitter', link: 'https://twitter.com/ertugrulsagdic', icon: XIcon },
    { name: 'Instagram', link: 'https://www.instagram.com/ertugrulsagdic/', icon: InstagramIcon },
    ...resumeSocialLinks,
];

export const skills: string[] = [
    'Python',
    'FastAPI',
    'AWS (EC2, S3, SQS)',
    'Datadog',
    'TypeScript',
    'JavaScript (ES6+)',
    'Node.js',
    'React',
    'Next.js',
    'Tailwind CSS',
    'SQL (PostgreSQL)',
    'NoSQL (MongoDB)',
    'Docker',
    'TensorFlow',
    'PyTorch',
    'Git',
    'Agile',
];