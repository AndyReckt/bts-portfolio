import { ValidPages } from "./constants";

type PagesConfig = {
    [key in ValidPages]: {
        title: string;
        description: string;
        // featuredDescription: string;
    };
};

export const pagesConfig: PagesConfig = {
    skills: {
        title: "Compétences",
        description: "Mes compétences",
        // featuredDescription: "Skill Showcase",
    },
    experience: {
        title: "Projets",
        description: "Mes projets",
        // featuredDescription: "Work Timeline",
    },
    contact: {
        title: "Contact",
        description: "Contactez-moi",
        // featuredDescription: "Get in Touch",
    },
    // contributions: {
    //     title: "Contributions",
    //     description: "Open-source contributions and community involvement.",
    //     // featuredDescription: "Contributions Showcase",
    // },
    resume: {
        title: "Curriculum Vitae",
        description: "Mon CV",
        // featuredDescription: "Resume Showcase",
    }
};
