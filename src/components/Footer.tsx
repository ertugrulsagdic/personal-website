import Container from "./Container";

export default function Footer({ translations }: {
    translations: {
        title: string,
        description: string
    }
}) {
    return (
        <footer className="print:hidden">
            <Container>
                <div className="flex flex-col items-center pt-8 pb-12 mt-16 border-t space-y-2 dark:border-zinc-700 border-zinc-300">
                    <p className="text-center">{translations.title}</p>
                    <p className="text-center">{translations.description}</p>
                </div>
            </Container>

        </footer>
    );
}