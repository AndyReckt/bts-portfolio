import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString("fr-FR", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function formatDateFromObj(input: Date): string {
    const date = new Date(input);
    return date.toLocaleDateString("fr-FR", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
