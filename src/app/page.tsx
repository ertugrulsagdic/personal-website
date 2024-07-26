import MainHeroSection from '@/components/sections/MainHeroSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    <div>
      <MainHeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* <Image
          alt='Profile picture'
          // src='/ertugrul.jpeg'
          src={ProfilePicture}
          width={500} height={500} 
          loading="lazy"
          // sizes="(min-width: 1024px) 32rem, 32rem"
          className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        /> */}
    </div>



  );
}
