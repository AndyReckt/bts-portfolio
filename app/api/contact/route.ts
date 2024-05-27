import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formLink = process.env.GOOGLE_FORM_LINK;
    if (!formLink) {
        return new NextResponse("Please configure the env variables", {
            status: 500,
        });
    }

    // configure this according to your google form
    const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
    const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
    const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
    const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

    try {
        const body = await req.json();

        console.log(JSON.stringify(body));
        const { name, message, social, email } = body;

        const res = await fetch(
            encodeURI(`${formLink}/formResponse?${fieldIdName}=${name}&${fieldIdEmail}=${email}&${fieldIdMessage}=${message}&${fieldIdSocial}=${social}`)
        );

        console.log(JSON.stringify(res));

        return NextResponse.json("Success!");
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
