import React from "react";
import Link from "next/link";

import { contributionsInterface } from "@/config/contributions";
import { Icons } from "./icons";
import Image from "next/image";

interface ContributionCardProps {
    contributions: contributionsInterface[];
}

export default function ContributionCard({
    contributions,
}: ContributionCardProps) {
    return (
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 static">
            {contributions.map((contribution, id) => (
                <Link href={contribution.link} target="_blank" key={id}>
                    <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground">
                        <Icons.externalLink
                            size={35}
                            className="absolute bottom-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground "
                        />
                        <div className="flex h-[170px] flex-col justify-between rounded-md p-6 sm:h-[170px]">
                            <div className="flex flex-row justify-between">
                                <h3 className="font-bold flex space-x-2 items-center">
                                    {/* <Icons.gitRepoIcon size={20} /> */}
                                    <span>{contribution.nom}</span>
                                </h3>
                                {contribution.ownerImage ? (
                                    <Image
                                        src={contribution.ownerImage}
                                        alt={""}
                                        width={25}
                                        height={25}
                                        className="rounded-full"
                                    />
                                ) : (<Icons.gitBranch size={20} />)}
                                
                            </div>
                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    {contribution.description}
                                </p>
                                <p className="text-sm text-muted-foreground flex space-x-2 items-center">
                                    {
                                        contribution.type === "Youtube" ? (
                                            <Icons.youtube size={15} />
                                        ) : (
                                            <Icons.gitBranch size={15} />
                                        )
                                    }
                                    <span>{contribution.type}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
