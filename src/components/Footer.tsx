import Container from "./Container";

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="flex justify-between py-8">
                    <p>© 2024 Ertugrul Sagdic</p>
                    <p>Created with Next.js, Tailwind CSS, and TypeScript</p>
                </div>
            </Container>

        </footer>
    );
}