import { Icons } from "@/components/icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@andyreckt",
        icon: Icons.gitHub,
        link: "https://github.com/andyreckt",
    },
    {
        name: "LinkedIn",
        username: "Alexandre Nede",
        icon: Icons.linkedin,
        link: "https://www.linkedin.com/in/alexandre-nede/",
    },
    {
        name: "Twitter",
        username: "@andyysucks",
        icon: Icons.twitter,
        link: "https://twitter.com/andyysucks",
    },
    // {
    //     name: "Gmail",
    //     username: "naman.barkiya02",
    //     icon: Icons.gmail,
    //     link: "mailto:naman.barkiya02@gmail.com",
    // },
];
