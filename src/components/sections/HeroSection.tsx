import Image from "next/image";
import Container from "@/components/Container";

export default function HeroSection({ translations }: {
    translations: {
        title: string;
        subtitle: string;
        description: string;
    }
}) {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="max-w-3xl space-y-6">
                <div>
                    <h1>{translations.title}</h1>
                    <h2 className="text-zinc-600 dark:text-zinc-400">{translations.subtitle}</h2>
                </div>
                <p>{translations.description}</p>
            </div>
        </Container>
    );
}