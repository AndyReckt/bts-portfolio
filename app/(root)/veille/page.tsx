import { Metadata } from "next";

import PageHeader from "@/components/page-header";
import { pagesConfig } from "@/config/pages";
import ContributionCard from "@/components/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";

export const metadata: Metadata = {
    title: "Veille",
    description: "Veille technologique.",
};

export default function ContributonsPage() {
    return (
        <>
            <PageHeader
                title={pagesConfig.veille.title}
                description={pagesConfig.veille.description}
            />
            <ContributionCard contributions={contributionsUnsorted} />
        </>
    );
}
