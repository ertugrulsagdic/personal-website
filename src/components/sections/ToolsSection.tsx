import Container from "@/components/Container";
import { ToolCategory } from "@/data/dataTypes/ToolCategory";
import { ImageWithFallback } from "../ImageWithFallback";
import Link from "next/link";

export default function ToolsSection({ tools }: {
    tools: ToolCategory[];
}) {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="space-y-16">
                {tools.map((category) => (
                    <div key={category.title} className="sm:grid sm:grid-cols-4 sm:border-l sm:px-4 dark:border-zinc-800 border-zinc-200">
                        <p className="mb-6">{category.title}</p>
                        <ul className="space-y-12 sm:col-span-3">
                            {category.tools.map((tool) => (
                                <li key={tool.title} className="group relative flex" >
                                    <div className="inline-flex flex-row space-x-6 items-start">
                                        <div className="relative z-10 flex h-12 w-12 p-2 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <div className="flex h-10 w-10 object-contain p-1 rounded-full items-center justify-center">
                                                <ImageWithFallback
                                                    src={tool.imageURL}
                                                    alt={`Logo of ${tool.title}`}
                                                    width={25}
                                                    height={25}
                                                    loading="lazy"
                                                    unoptimized
                                                    className="rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                                            <Link
                                                href={tool.href}
                                                target='_blank'
                                            >
                                                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                                <span className="relative z-10">
                                                    <div className="items-center text-primary dark:text-primary-light">
                                                        <h6>{tool.title}</h6>
                                                        <p>{tool.description}</p>
                                                    </div>
                                                </span>
                                            </Link>
                                        </div>
                                        {/* <div>
                                            <h6>{tool.title}</h6>
                                            <p>{tool.description}</p>
                                        </div> */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    );
}