import { Metadata } from "next";

import ProjectCard from "@/components/project-card";
import PageHeader from "@/components/page-header";
import { cn } from "@/lib/utils";
import { Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
    title: "Projets",
    description: "Découvrez mes projets.",
};

function ProjectContainer({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-center justify-center mb-4 md:mb-0 [&>div]:w-full ",
                className
            )}
            {...props}
        />
    );
}

const renderContent = (tabVal: string) => {
    let expArr = Experiences;
    if (tabVal === "personal") {
        expArr = expArr.filter((val) => val.type === "Personal Project");
    } else if (tabVal === "professional") {
        expArr = expArr.filter((val) => val.type === "Professional");
    }

    return (
        <div className="container items-start justify-center gap-6 rounded-lg p-8 sm:grid md:grid-cols-2 lg:grid-cols-3">
            {expArr.map((exp) => (
                <ProjectContainer key={exp.id}>
                    <ProjectCard project={exp} />
                </ProjectContainer>
            ))}
        </div>
    );
};

export default function ExperiencePage() {
    return (
        <>
            <PageHeader
                title={pagesConfig.experience.title}
                description={pagesConfig.experience.description}
            />
            <Tabs defaultValue="all" className="w-full">
                <TabsList className="conatiner grid max-w-[30rem] grid-cols-3">
                    <TabsTrigger value="all">Tous</TabsTrigger>
                    <TabsTrigger value="personal">Personnels</TabsTrigger>
                    <TabsTrigger value="professional">Scolaires</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="w-full">
                    {renderContent("all")}
                </TabsContent>
                <TabsContent value="professional">
                    {renderContent("professional")}
                </TabsContent>
                <TabsContent value="personal">
                    {renderContent("personal")}
                </TabsContent>
            </Tabs>
        </>
    );
}
