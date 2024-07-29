import { SocialProfile } from "./dataTypes/socialProfile";

import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { XIcon } from '@/components/icons/XIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

export const socialLinks: SocialProfile[] = [
    { name: 'Twitter', link: 'https://twitter.com/ertugrulsagdic', icon: XIcon },
    { name: 'Instagram', link: 'https://www.instagram.com/ertugrulsagdic/', icon: InstagramIcon },
    { name: 'Github', link: 'https://github.com/ertugrulsagdic', icon: GitHubIcon },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ertugrulsagdic', icon: LinkedInIcon },
];

export const skills: string[] = [
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