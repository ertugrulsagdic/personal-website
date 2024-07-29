import Image from "next/image";
import Container from "@/components/Container";
import ProfilePicture from '@/images/ertugrul.jpeg';
import Link from "next/link";
import {ImageWithFallback} from "@/components/ImageWithFallback";
import { socialLinks } from "@/data";


export default function MainHeroSection({ translations }: {
    translations: {
        greeting: string;
        title: string;
        subtitle: string;
        description: string;
        pictureAlt: string;
    }
}) {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="max-w-3xl space-y-6">
                    <div className="flex items-center space-x-2">
                        <p>{translations.greeting}</p>
                        <ImageWithFallback
                            alt='Hi!'
                            src='https://raw.githubusercontent.com/ertugrulsagdic/ertugrulsagdic/main/Hi.gif'
                            width={25} height={25}
                            loading="lazy"
                            unoptimized
                        />
                    </div>
                    <div>
                        <h1>{translations.title}</h1>
                        <h2 className="text-zinc-600 dark:text-zinc-400">{translations.subtitle}</h2>
                    </div>
                    <p>{translations.description}</p>
                    <ul className='mt-6 flex gap-4 flow-row'>
                        {socialLinks.map((socialProfile) => (
                            <li
                                key={socialProfile.name}
                                aria-label={`Follow on ${socialProfile.name}`}
                            >
                                <Link
                                    href={socialProfile.link}
                                    target="_blank"
                                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary dark:text-zinc-200"
                                >
                                    <socialProfile.icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:mx-auto max-w-xs lg:max-w-none">
                    <Image
                        alt={translations.pictureAlt}
                        src={ProfilePicture}
                        width={450} height={450}
                        loading="lazy"
                        className="rotate-3 aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    />

                </div>
            </div>
        </Container>
    );
}