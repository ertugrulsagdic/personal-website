import HeroSection from "@/components/sections/HeroSection";
import ToolsSection from "@/components/sections/ToolsSection";
import getLocale from "@/locales";

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const translations = await getLocale(locale, 'tools');

    return (
        <div >
            <HeroSection 
                translations={translations.hero}
            />
            <ToolsSection tools={translations.toolsList} />
        </div>
    );
}