import Image from "next/image";
import Container from "@/components/Container";
import Hi from '@/images/Hi.gif'
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { XIcon } from '@/components/icons/XIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
// import Image from 'next/image'
import ProfilePicture from '@/images/ertugrul.jpeg'


const SocialMedia = [
    { name: 'Twitter', link: 'https://twitter.com/ertugrulsagdic', icon: XIcon },
    { name: 'Instagram', link: 'https://www.instagram.com/ertugrulsagdic/', icon: InstagramIcon },
    { name: 'Github', link: 'https://github.com/ertugrulsagdic', icon: GitHubIcon },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ertugrulsagdic', icon: LinkedInIcon },
];

export default function MainHeroSection() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="max-w-3xl space-y-6">
                    <div className="flex items-center space-x-2">
                        <p>Hi there </p>
                        <Image
                            alt='Hi!'
                            src={Hi}
                            width={25} height={25}
                            loading="lazy"
                        />
                    </div>

                    {/* <h1>Software designer, founder, and amateur astronaut.</h1> */}
                    <div>
                        <h1>I&apos;m Ertugrul Sagdic </h1>
                        <h2 className="text-zinc-600 dark:text-zinc-400">Software Engineer </h2>
                    </div>
                    <p>
                        I build software with a passion to make a meaningful impact with every line of code. My engineering journey is defined by pushing boundaries in research, progress, and continuous improvement.                    </p>
                    <ul className='mt-6 flex gap-4 flow-row'>
                        {SocialMedia.map((socialProfile) => (
                            <li
                                key={socialProfile.name}
                                aria-label={`Follow on ${socialProfile.name}`}
                            >
                                <a
                                    href={socialProfile.link}
                                    target="_blank"
                                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary dark:text-zinc-200"
                                >
                                    <socialProfile.icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:mx-auto max-w-xs lg:max-w-none">
                    <Image
                        alt='Profile picture'
                        // src='/ertugrul.jpeg'
                        src={ProfilePicture}
                        width={450} height={450}
                        loading="lazy"
                        // sizes="(min-width: 1024px) 32rem, 32rem"
                        className="rotate-3 aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    />

                </div>
            </div>
        </Container>
    );
}