export type ContribType = "Youtube" | "";

export interface contributionsInterface {
    nom: string;
    description: string;
    type: ContribType;
    link: string;
    ownerImage?: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
    {
        nom: "Linus Tech Tips",
        description:
            "Equipe d'experts en technologie qui partagent des nouvelles et des avis sur les derniers produits technologiques.",
        type: "Youtube",
        link: "https://youtube.com/@LinusTechTips",
        ownerImage: "https://yt3.googleusercontent.com/Vy6KL7EM_apxPSxF0pPy5w_c87YDTOlBQo3MADDF0Wl51kwxmt9wmRotnt2xQXwlrcyO0Xe56w=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        nom: "Leo Techmaker",
        description:
            "Mise en avant de l'apprentissage continu sur le theme de la tech, ainsi qu'une couverture de l'actualité.",
        type: "Youtube",
        link: "https://youtube.com/@LeoTechmaker",
        ownerImage: "https://yt3.googleusercontent.com/ytc/AIdro_lmMQkTfdO_gRn1ec1al_6Z8pxxnQgZA1j2OIV4-MJ21A=s176-c-k-c0x00ffffff-no-rj"
    },
    {
        nom: "Fireship",
        description:
            "Couvre les dernières technologies web, et crée tutoriels et les astuces pour les développeurs.",
        type: "Youtube",
        link: "https://youtube.com/@Fireship",
        ownerImage: "https://yt3.googleusercontent.com/ytc/AIdro_nbpmO4qfGbsMpTI1L80F4ObHRJxHP5qYz_PNHdaXUT3OY=s176-c-k-c0x00ffffff-no-rj"
    },
    {
        nom: "Asmongold",
        description:
            "Youtubeur et streamer sur Twitch, spécialisé dans les jeux vidéo, couvre l'actualité d'internet.",
        type: "Youtube",
        link: "https://youtube.com/@AsmonTV",
        ownerImage: "https://yt3.googleusercontent.com/SMHmQVpzLs0uL7728eQfYp4auW_-Gy5eWjF1knpd11TSu68Y_0C1RFzP8G_HzUL6wXSjwPvZ=s160-c-k-c0x00ffffff-no-rj"
    },
];

export const featuredContributions: contributionsInterface[] =
    contributionsUnsorted.slice(0, 3);
