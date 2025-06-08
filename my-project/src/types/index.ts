export type ExampleType = {
    id: number;
    name: string;
    isActive: boolean;
};

export interface ExampleInterface {
    title: string;
    description?: string;
    createdAt: Date;
}

export function greet(name: string): string {
    return `Hello, ${name}!`;
}