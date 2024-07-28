import Container from "@/components/Container"
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import getLocale from "@/locales";

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const translations = await getLocale(locale);

    return (
        <div>
            <HeroSection translations={translations.projects.hero} />
            <ProjectsSection 
                title={translations.projects.mostRecentProjects.title}
                description={translations.projects.mostRecentProjects.description}
                projects={translations.allProjects.mostRecentProjects}
            />
            <ProjectsSection 
                title={translations.projects.undergradProjects.title}
                description={translations.projects.undergradProjects.description}
                projects={translations.allProjects.undergradProjects}
            />
        </div>
    )
}