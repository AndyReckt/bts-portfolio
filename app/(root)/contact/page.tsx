"use client"

import { redirect } from "next/navigation";
import React, { useEffect } from "react";

// import { Metadata } from "next";

import PageHeader from "@/components/page-header";
// import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

// export const metadata: Metadata = {
//     title: "Contact",
//     description: "Contactez-moi",
// };

export default function ContactPage() {
    useEffect(() => {
        redirect(process.env.NEXT_PUBLIC_GOOGLE_FORM_LINK || "/");
    }, []);
    return (
        <>
            <PageHeader
                title={pagesConfig.contact.title}
                description={pagesConfig.contact.description}
            />
            <div className="flex justify-center min-w-full">
                <div className="flex w-[40rem]">
                <p>Redirection...</p>
                    {/* <ContactForm /> */}
                </div>
            </div>
        </>
    );
}
