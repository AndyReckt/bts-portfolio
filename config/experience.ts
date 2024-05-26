import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
    title: string;
    imgArr: string[];
    description?: string;
}

interface DescriptionDetailsInterface {
    paragraphs: string[];
    bullets: string[];
}

export interface ExperienceInterface {
    id: string;
    type: ValidExpType;
    companyName: string;
    category: ValidCategory[];
    shortDescription: string;
    websiteLink?: string;
    githubLink?: string;
    techStack: ValidSkills[];
    startDate: Date;
    endDate: Date;
    companyLogoImg: any;
    descriptionDetails: DescriptionDetailsInterface;
    pagesInfoArr?: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
    {
        id: "akira",
        companyName: "Akira",
        type: "Personal Project",
        category: ["Backend", "Minecraft"],
        shortDescription:
            "Serveur Minecraft UHC développé en Java",
        githubLink: "https://github.com/akira-mc/",
        techStack: ["Java", "Node.js", "React", "Next.js", "MongoDB", "Redis", "Hazelcast", "Docker", "Typescript", "express.js"],
        startDate: new Date("2021-07-01"),
        endDate: new Date(),
        companyLogoImg: "/experience/akira/akira-banner.png",
        descriptionDetails: {
            paragraphs: [
                "Akira est un serveur Minecraft UHC développé en Java. Le serveur est basé sur une architecture distribuée, avec des microservices géré par Cloudnet et des bases de données MongoDB, Redis et Hazelcast.",
                "Le serveur est hébergé sur un serveur dédié et utilise des images Docker pour chaque microservice.", 
                "Le serveur est en constante évolution et de nouvelles fonctionnalités sont ajoutées régulièrement.",
            ],
            bullets: [
                "Serveur Minecraft UHC développé en Java.",
                "Architecture distribuée avec microservices géré par Cloudnet.",
                "Bases de données MongoDB, Redis et Hazelcast.",
                "Hébergé sur un serveur dédié avec des images Docker pour chaque microservice.",
                "Nouvelles fonctionnalités ajoutées régulièrement.",
            ],
        },
    },
    {
        id: "akira-tickets",
        companyName: "Akira Tickets",
        type: "Personal Project",
        category: ["Full Stack", "Web Dev"],
        shortDescription:
            "Systeme de tickets pour le serveur Discord d'Akira",
        githubLink: "https://github.com/akira-mc/ticket-panel/",
        websiteLink: "https://tickets.akiramc.fr/",
        techStack: ["Node.js", "React", "Next.js", "Typescript", "MongoDB", "Java"],
        startDate: new Date("2023-09-20"),
        endDate: new Date(),
        companyLogoImg: "/experience/akira/akira-banner.png",
        descriptionDetails: {
            paragraphs: [
                "Systeme de tickets pour le serveur Discord d'Akira",
                "Contient un Frontend construit avec Node.js, React et Typescript, ainsi qu'un Backend construit avec Java et MongoDB",
                "Le systeme de tickets est utilisé pour gérer les demandes de support des joueurs sur le serveur Discord d'Akira.",
            ],
            bullets: [
                "Systeme de tickets pour le serveur Discord d'Akira.",
                "Frontend construit avec Node.js, React et Typescript.",
                "Backend construit avec Java et MongoDB.",
                "Utilisé pour gérer les demandes de support des joueurs.",
            ],
        },
    },
    {
        id: "solid-eat",
        companyName: "Solid Eat",
        type: "Professional",
        category: ["Full Stack", "Web Dev"],
        shortDescription:
            "Site web de regroupement de restaurants solidaires",
        websiteLink: "https://solid-eat.vercel.app/",
        githubLink: "https://github.com/andyreckt/solideat/",
        techStack: ["Node.js", "React", "Next.js", "express.js", "Typescript", "MongoDB"],
        startDate: new Date("2023-09-20"),
        endDate: new Date(),
        companyLogoImg: "/experience/solideat/logo.svg",
        descriptionDetails: {
            paragraphs: [
                "Solid Eat est un site web de regroupement de restaurants solidaires.",
                "Le site permet aux utilisateurs de trouver des restaurants dans Paris qui offrent des repas gratuits ou à prix réduit.",
                "Le site est construit avec Node.js, React, express.js et MongoDB.",
            ],
            bullets: [
                "Site web de regroupement de restaurants solidaires.",
                "Permet aux utilisateurs de trouver des restaurants solidaires.",
                "Construit avec Node.js, React, express.js et MongoDB.",
            ],
        },
        pagesInfoArr: [
            {
                title: "Accueil",
                imgArr: ["/experience/solideat/acceuil.png"],
            },
            {
                title: "Panel Admin",
                imgArr: ["/experience/solideat/panel-admin.png"],
            },
            {
                title: "Restaurant",
                imgArr: ["/experience/solideat/restaurant.png"],
            },
        ],
    },
    
];

export const featuredExperiences = Experiences.slice(0, 3);
