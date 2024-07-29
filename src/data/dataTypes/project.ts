export type Project = {
    title: string;
    description: string;
    link: Link;
    techStack: string[];
    logo?: string;
}

type Link = {
    title: string;
    url: string;
    isIntenal?: boolean;
}
