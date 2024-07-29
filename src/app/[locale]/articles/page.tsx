import Container from "@/components/Container"
import HeroSection from "@/components/sections/HeroSection";
import getLocale from "@/locales";

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const translations = await getLocale(locale, 'articles');

    const articles = [];

    return (
        <div >
            <HeroSection 
                translations={{
                    title: translations.hero.title,
                    description: articles.length !== 0 ? translations.hero.description : translations.hero.emptyDescription
                }}
            />
        </div>
    );
}