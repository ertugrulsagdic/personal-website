import Container from "./Container";

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="flex flex-col items-center py-12 mt-16 border-t space-y-2">
                    <p className="text-center">© 2024 Ertugrul Sagdic</p>
                    <p className="text-center">Created with Next.js, Tailwind CSS, and TypeScript</p>
                </div>
            </Container>

        </footer>
    );
}