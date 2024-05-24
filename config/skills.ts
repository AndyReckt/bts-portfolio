import { Icons } from "@/components/icons";

export interface skillsInterface {
    name: string;
    description: string;
    rating: number;
    icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
    {
        name: "Java",
        description:
            "Developper des applications logicielles robustes en utilisant le langage de programmation orienté objet.",
        rating: 5,
        icon: Icons.java,
    },
    {
        name: "Kotlin",
        description:
            "Construire des applications modernes et performantes avec un langage de programmation concis.",
        rating: 5,
        icon: Icons.kotlin,
    },
    {
        name: "Typescript",
        description:
            "Augmenter la productivité et la qualité du code en ajoutant un typage statique à JavaScript.",
        rating: 5,
        icon: Icons.typescript,
    },
    {
        name: "Next.js",
        description:
            "Créer des applications web modernes performantes avec une expérience de développement améliorée.",
        rating: 4,
        icon: Icons.nextjs,
    },
    {
        name: "React",
        description:
            "Construire des interfaces utilisateur interactives et réactives avec la bibliothèque JavaScript populaire.",
        rating: 4,
        icon: Icons.react,
    },
    {
        name: "express.js",
        description:
            "Construire des applications web robustes et évolutives avec le framework Node.js.",
        rating: 5,
        icon: Icons.express,
    },
    {
        name: "Node.js",
        description:
            "Exécuter du code JavaScript côté serveur pour construire des applications web évolutives.",
        rating: 5,
        icon: Icons.nodejs,
    },
    {
        name: "MongoDB",
        description:
            "Stocker des données non structurées et semi-structurées pour des applications modernes.",
        rating: 5,
        icon: Icons.mongodb,
    },
    {
        name: "Javascript",
        description:
            "Créer des applications web interactives et dynamiques avec le langage de programmation client.",
        rating: 5,
        icon: Icons.javascript,
    },
    {
        name: "HTML 5",
        description:
            "Créer des pages web sémantiques et accessibles avec la dernière itération de HTML.",
        rating: 4,
        icon: Icons.html5,
    },
    {
        name: "CSS 3",
        description:
            "Styliser les pages web avec des mises en page modernes et des animations fluides.",
        rating: 3,
        icon: Icons.css3,
    },
    {
        name: "Tailwind CSS",
        description:
            "Construire des interfaces utilisateur modernes et réactives avec un framework CSS utilitaire.",
        rating: 3,
        icon: Icons.tailwindcss,
    },
    {
        name: "MySQL",
        description:
            "Stockez des données structurées pour des applications web évolutives et performantes.",
        rating: 3,
        icon: Icons.mysql,
    },
    {
        name: "Php",
        description:
            "Développer des applications web dynamiques et interactives avec le langage de script côté serveur.",
        rating: 3,
        icon: Icons.php,
    },
    {
        name: "Redis",
        description:
            "Stockez des données en mémoire pour des applications à haute performance.",
        rating: 5,
        icon: Icons.redis,
    }
];

export const skills = skillsUnsorted
    .slice()
    .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
