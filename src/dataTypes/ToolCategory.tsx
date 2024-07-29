export type ToolCategory = {
    title: string;
    tools: Tool[];
};

type Tool = {
    title: string;
    description: string;
    href: string;
    imageURL: string;
};