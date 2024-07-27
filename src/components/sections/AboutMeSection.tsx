import Container from "@/components/Container"
import Image from 'next/image'
import ProfilePicture from '@/images/ertugrul.jpeg'

const Skills: string[] = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Python',
    'TensorFlow',
    'PyTorch',
    'SQL (PostgreSQL)',
    'NoSQL (MongoDB)',
    'Docker',
    'Git',
    'Agile',
];

export default function AboutMeSection() {
    return (
        <Container className="mt-16 sm:mt-32 ">
            <div className="space-y-8">
                <h1>More about me</h1>
                <div className="space-y-4 max-w-4xl">
                    <p>
                        From the vibrant streets of Istanbul to the academic halls of Lamar University in Texas, my journey in software engineering has been anything but ordinary. With a Bachelor&apos;s degree in Computer Science from Marmara University and pursuing a Master&apos;s in Computer Science at Lamar University, I&apos;ve always been driven by a quest for knowledge and innovation.
                    </p>
                    <p>
                        My professional path has led me through diverse roles—from a Mobile Software Engineer at Crenno, where I honed my UI design skills, to a Full Stack Software Engineer at MDP Group in Istanbul, improving business processes with innovative software solutions. Most recently, I’ve been involved in cutting-edge research at Lamar University , developing anomaly detection systems and deep learning models that push the boundaries of AI in practical applications.
                    </p>
                    <p>
                        My engineering projects reflect my commitment to continuous improvement and my knack for tackling challenges head-on. Whether I&apos;m developing RESTful APIs for real-time systems or designing user interfaces that enhance user engagement, my goal is always to build software that is not only functional but also impactful.
                    </p>
                    <p>
                        When I’m not coding or collaborating on breakthrough projects, you might find me exploring new tech trends, working out, or enjoying a good book. I believe that a balanced life fuels the most extensive innovations, and I bring this balance into every line of code I write.
                    </p>
                    <p>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="grid grid-cols-4 gap-3">
                        {Skills.map((skill) => (
                            <li className="before:content-['▹']" key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    )
}