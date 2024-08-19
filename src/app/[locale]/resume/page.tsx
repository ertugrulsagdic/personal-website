import Container from "@/components/Container"
import { GlobeIcon } from "@/components/icons/GlobeIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { resumeSocialLinks, skills } from "@/data";
import getLocale from "@/locales"
import Link from "next/link";
import Image from "next/image"; // Add this line
import ProfilePicture from '@/images/ertugrul.jpeg';
import { Experience } from "@/data/dataTypes/experiences";
import { Education } from "@/data/dataTypes/education";
import { Project } from "@/data/dataTypes/project";

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const translations = await getLocale(locale);

    return (
        <Container className="mt-16 sm:mt-32 print:mt-0 print:px-0 space-y-12 print:space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1.5 print:space-y-1">
                    <h1 className="max-w-md sm:text-2xl font-bold text-xl">{translations.info.name}</h1>
                    <p className="text-sm sm:text-base">
                        {translations.info.about}
                    </p>
                    <p className="items-center text-sm sm:text-base print:hidden">
                        <Link
                            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                            href={translations.info.locationLink}
                            target="_blank"
                        >
                            <GlobeIcon className="size-4" />
                            {translations.info.location}
                        </Link>
                    </p>
                    <div className="flex gap-x-1 pt-1 print:hidden">
                        <OutlinedIconButton href={`mailto:${translations.info.email}`}>
                            <MailIcon className="size-4" />
                        </OutlinedIconButton>
                        <OutlinedIconButton href={`tel:${translations.info.mobile}`}>
                            <PhoneIcon className="size-4" />
                        </OutlinedIconButton>
                        {
                            resumeSocialLinks.map(({ name, link, icon: Icon }) => (
                                <OutlinedIconButton key={name} href={link}>
                                    <Icon className="size-4 fill-current" />
                                </OutlinedIconButton>
                            ))
                        }
                    </div>
                    <div className="hidden flex-row space-x-4 print:flex">
                        <Link href={`mailto:${translations.info.email}`}>
                            <span className="underline">{translations.info.email}</span>
                        </Link>
                        <Link href={`mailto:${translations.info.mobile}`}>
                            <span className="underline">{translations.info.mobile}</span>
                        </Link>
                        {
                            resumeSocialLinks.map(({ name, link }) => (
                                <Link key={name} href={link}>
                                    {/* <span className="underline">{link.replace('https://', "").replace('www.', "")}</span> */}
                                    <span className="underline">{name}</span>
                                </Link>
                            ))
                        }
                        <Link href={'www.ertugrulsagdic.com'}>
                            <span className="underline">ertugrulsagdic.com</span>
                        </Link>
                    </div>

                </div>

                <div className="size-32 print:hidden">
                    <Image
                        alt={translations.info.name}
                        src={ProfilePicture}
                        loading="lazy"
                        className="aspect-square rounded-2xl object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-3 print:gap-y-2">
                <h2 className="sm:text-xl text-lg font-bold">{translations.resume.experience}</h2>
                {
                    translations.experiences.map((experience: Experience) => (
                        <div key={experience.company} className="flex flex-col">
                            <div className="mb-1 print:mb-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="sm:text-base text-sm font-bold">{experience.company}</h3>
                                    <p className="text-sm sm:text-base">{experience.location}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm sm:text-base">{experience.position}</p>
                                    <p className="text-sm sm:text-base">{experience.date}</p>
                                </div>
                            </div>
                            {
                                experience.bullets.map(({ description, subDescriptions }) => (
                                    <div key={description} className="flex flex-col gap-y-1 print:gap-y-0">
                                        <p className="text-sm">•  {description}</p>
                                        {
                                            subDescriptions?.map((subDescription) => (
                                                <p key={subDescription} className="before:content-['▹'] pl-4 text-sm print:pl-2">{subDescription}</p>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-y-3 print:gap-y-2">
                <h2 className="sm:text-xl text-lg">{translations.resume.education}</h2>
                {
                    translations.educations.map((education: Education) => (
                        <div key={education.institution} className="flex flex-col gap-y-1 print:gap-y-0">
                            <div className="flex items-center justify-between">
                                <h3 className="sm:text-base text-sm font-bold">{education.institution}</h3>
                                <p className="text-sm sm:text-base">{education.location}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm sm:text-base">{education.degree}</p>
                                <p className="text-sm sm:text-base">{education.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-y-3 print:gap-y-2">
                <h2 className="sm:text-xl text-lg font-bold">{translations.resume.skills}</h2>
                <div className="flex flex-wrap gap-1 print:gap-0">
                    {skills.map((skill, index) => {
                        return (
                            <div className="flex"
                                key={skill}>
                                <div
                                    className="text-sm bg-zinc-100 dark:bg-zinc-700 dark:text-white px-2 py-1 rounded-md print:text-[10px]">
                                    {skill}
                                </div>
                                <div className="hidden print:flex">
                                    {index !== skills.length - 1 && '|'}
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>

            <div className="hidden flex-col gap-y-3 print:gap-y-2 print:flex">
                <h2 className="sm:text-xl text-lg font-bold">{translations.resume.projects}</h2>
                <div>
                    {
                        translations.allProjects.mostRecentProjects.map((project: Project) => (
                            <div key={project.title} className="pb-4">
                                <div className="flex flex-col gap-y-2">
                                    <div className="flex items-center gap-2">
                                        <Link href={project.link.url} target="_blank" className="text-primary hover:underline justify-center">
                                            <h3 className="text-sm sm:text-base font-bold">{project.title}</h3>
                                        </Link>
                                        <div className="flex flex-wrap gap-1">
                                            {project.techStack.map((technology) => (
                                                <div
                                                    key={technology}
                                                    className="text-[10px] bg-zinc-100 dark:bg-zinc-700 dark:text-white px-2 py-1 rounded-md print:text-[10px]">
                                                    {technology}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm">{project.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-y-3 print:gap-y-0 print-force-new-page print:hidden">
                <h2 className="text-xl font-bold">{translations.resume.projects}</h2>
                <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {
                        translations.allProjects.mostRecentProjects.map((project: Project) => (
                            <div key={project.title} className="border rounded-lg p-3 border-zinc-200 dark:border-zinc-700">
                                <div className="flex flex-col gap-y-2">
                                    <Link href={project.link.url} target="_blank" className="text-primary hover:underline">
                                        <h3 className="text-sm sm:text-base font-bold">{project.title}</h3>
                                    </Link>
                                    <p className="text-sm">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-3">
                                    {project.techStack.map((technology) => (
                                        <div
                                            key={technology}
                                            className="text-[10px] bg-zinc-100 dark:bg-zinc-700 dark:text-white px-2 py-1 rounded-md print:text-[10px]">
                                            {technology}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {locale === 'en' && (
                <div className={`hidden ${locale === 'en' ? 'print:flex' : ''} flex-col gap-y-3 print:gap-y-2 print-force-new-page`}>
                    <h2 className="sm:text-xl text-lg font-bold">{translations.resume.coverLetter}</h2>
                    {
                        translations.resume.coverLetterContent.map((paragraph: string) => (
                            <p key={paragraph} className="text-sm sm:text-base">{paragraph}</p>
                        ))
                    }
                </div>
            )}
        </Container >
    )

    function OutlinedIconButton({ children, href }: { children: React.ReactNode, href: string }) {
        return (
            <Link
                href={href}
                className="flex size-8 items-center justify-center border border-input hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white hover:text-black rounded-md border-zinc-600 dark:border-zinc-300"
            >
                {children}
            </Link>
        );
    }
}