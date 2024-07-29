import MainHeroSection from '@/components/sections/MainHeroSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import getLocale from '@/locales/index';


export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const translations = await getLocale(locale);

  return (
    <div>
      <MainHeroSection translations={translations.home.hero} />
      <AboutMeSection translations={translations.home.aboutMe} />
      <ExperienceSection translations={{
        title: translations.home.experience.title,
        experiences: translations.experiences
      }} />
      <ProjectsSection
        title={translations.home.projects.title}
        projects={translations.allProjects.mostRecentProjects}
      />
    </div>



  );
}
