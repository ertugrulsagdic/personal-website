import Container from "@/components/Container"
import ProjectsSection from "@/components/sections/ProjectsSection";
import getLocale from "@/util/locales";

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const translations = await getLocale(locale);

    return (
        <div>
            <ProjectsSection 
                title={translations.home.projects.title}
                projects={translations.allProjects.projects}
            />

        </div>
    )
}