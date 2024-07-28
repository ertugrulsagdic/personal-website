import Container from "./Container";

export default function Footer({ translations }: {
    translations: {
        title: string,
        description: string
    }
}) {
    return (
        <footer>
            <Container>
                <div className="flex flex-col items-center py-12 mt-16 border-t space-y-2">
                    <p className="text-center">{translations.title}</p>
                    <p className="text-center">{translations.description}</p>
                </div>
            </Container>

        </footer>
    );
}