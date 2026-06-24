import {
    Resend
} from "resend";
import {
    ContactFormSchema
} from "@/app/lib/validation";
import {
    NextResponse
} from "next/server";
// custom noreply mailová adresa

const resend = new Resend("re_Bnxzgqsf_HaWBjsC1XBtu6AYsf9cigs7r");

export async function POST (request: Request) {
    try {
        const body = await request.json();
        const safeParsedBody = ContactFormSchema.safeParse(body);

        if (!safeParsedBody.success) {
            return (
                NextResponse.json(
                    {
                        errors: "Špatný požadavek HTTP ERROR 400"
                    },
                    {
                        status: 400
                    }
                )
            );
        };

        const {
            name,
            email,
            phone,
            file,
            message
        } = safeParsedBody.data;

        await resend.emails.create({
            from: "onboarding@resend.dev",
            to: `heidinger@replikyoken.cz`,
            subject: "Nová zpráva / poptávka z replikyoken.cz",
            html: `
            <p>
                Jméno: ${name}
            </p>
            <p>
                E-mail: ${email}
            </p>
            <p>
                Telefonní číslo: ${phone?.trim() || "-"}
            </p>
            <p>
                Zpráva: ${message}
            </p>
            `,
            attachments: [
                {
                    filename: `${file}`,
                }
            ],
        });

        return (
            NextResponse.json({
                success: true
            })
        );
    } catch (error) {
        console.error("Něco se nezdařilo při odesílání zprávy:", error);

        return (
            NextResponse.json({
                errors: "Nezdařilo se odeslat zprávu z webového formuláře."
            })
        );
    };
};