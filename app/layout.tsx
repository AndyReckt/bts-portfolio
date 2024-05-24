import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Analytics } from "@/components/analytics";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
});

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
    ],
    authors: [
        {
            name: "Akexandre Nede",
            url: "https://alexandre-nede-portfolio.exah.cc",
        },
    ],
    creator: "andyreckt",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@andyysucks",
    },
    icons: {
        icon: "https://res.cloudinary.com/dbfvcn3f6/image/upload/v1692357384/assets/naman-favicon.ico",
        shortcut:
            "https://res.cloudinary.com/dbfvcn3f6/image/upload/v1692357294/assets/naman-logo.png",
        apple: "https://res.cloudinary.com/dbfvcn3f6/image/upload/v1692357294/assets/naman-logo.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontHeading.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                    <Analytics />
                    <Toaster />
                    <ModalProvider />
                    {/* <TailwindIndicator /> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
