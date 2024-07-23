import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
// import ProfilePicture from '../images/ertugrul.jpeg'

export default function Home() {
  return (
    <main >
      <Container>
        {/* <Image
          alt='Profile picture'
          // src='/ertugrul.jpeg'
          src={ProfilePicture}
          width={500} height={500} 
          loading="lazy"
          // sizes="(min-width: 1024px) 32rem, 32rem"
          className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        /> */}
        <div className="mt-16 sm:mt-32 h-96">
          <h1>Main</h1>
        </div>

        <div className="mt-16 sm:mt-32 h-96">
          <h1>Title</h1>
        </div>
        <div className="mt-16 sm:mt-32 h-96">
          <h1>Title</h1>
        </div>
        <div className="mt-16 sm:mt-32 h-96">
          <h1>Title</h1>
        </div>
        <div className="mt-16 sm:mt-32 h-96">
          <h1>Title</h1>
        </div>
        <div className="mt-16 sm:mt-32 h-96">
          <h1>Title</h1>
        </div>
        <div className="mt-16 sm:mt-32 h-96">
          <h1>Title</h1>
        </div>
      </Container>
    </main>

  );
}
