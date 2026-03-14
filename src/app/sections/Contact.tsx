"use client";

import {
    Fragment
} from "react";
import {
    useForm
} from "react-hook-form";
import {
    zodResolver
} from "@hookform/resolvers/zod";
import {
    ContactFormSchema,
    ContactFormProps
} from "@/app/lib/validation";
import {
    useRouter
} from "next/navigation";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Flex from "../components/Flex";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        reset
    } = useForm<ContactFormProps>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    });

    const handleForm = async (contactFormCredentials: ContactFormProps) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactFormCredentials)
            });

            if (!res.ok) {
                const errorCredentials = await res.json();
                console.error("Chyba při odesílání zprávy:", errorCredentials);
                
                return;
            };

            router.push("/dekujeme");

            reset();
        } catch (catchError) {
            console.error("Chyba při odesílání zprávy:", catchError);
        };
    };

    const wordsToCapitalize = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const target = evt.target;
        const targetValue = target.value;
        const words = targetValue.split(" ");
        const wordsCapitalize = words[0].toString().toUpperCase();

        target.value = " " + wordsCapitalize;
    };

    return (
        <Fragment>
            <Wrapper
            // md:h-[500px]
            // relative
            className="border-y border-gray-200 bg-white max-w-full "
            id="kontakt">
                <Wrapper className="p-6 md:p-12 text-black text-center relative z-10">
                    <ScrollAnimation className="w-full flex flex-col justify-center items-center gap-3 text-center">
                        <Heading className="md:pt-32 text-center">
                            Spojte se s námi.
                        </Heading>
                        <Subheading>
                            Napište nám nebo zavolejte a proměníme Vaše představy do reality.
                        </Subheading>
                        <Flex className="w-full md:flex-row flex-col">
                            <form
                            onSubmit={handleSubmit(handleForm)}
                            className="p-3.5 md:p-4 lg:p-4.5 w-full md:w-6/10 min-h-100 bg-white/10 flex flex-col justify-center rounded-md">
                                <Flex className="flex-col">
                                    {
                                        [
                                            {
                                                key: "name",
                                                type: "text",
                                                placeholder: "Jan Nový"
                                            },
                                            {
                                                key: "email",
                                                type: "email",
                                                placeholder: "jan@novy.cz"
                                            },
                                            {
                                                key: "phone",
                                                type: "tel",
                                                placeholder: "+420 601 123 456"
                                            },
                                            {
                                                key: "message",
                                                type: "textarea",
                                                placeholder: "Zpráva pro nás"
                                            }
                                        ].map((input, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    {
                                                        input.key !== "message" ? (
                                                            <input
                                                            {...register(input.key as any)}
                                                            type={input.type}
                                                            placeholder={input.placeholder}
                                                            // {
                                                            //     ...(
                                                            //         input.key === "name" && {
                                                            //             onChange: (evt) => wordsToCapitalize(evt)
                                                            //         }
                                                            //     )
                                                            // }
                                                            className="p-4 md:p-4.5 lg:p-5 w-full bg-[#f5f2e8] text-black focus:outline-none placeholder:text-black"
                                                            />
                                                        ) : (
                                                            <textarea
                                                            {...register(input.key as "message")}
                                                            placeholder="Zpráva pro nás"
                                                            className="p-4 md:p-4.5 lg:p-5 min-h-[200px] w-full resize-none bg-[#f5f2e8] text-black focus:outline-none placeholder:text-black" />
                                                        )
                                                    }
                                                </Fragment>
                                            );
                                        })
                                    }
                                    <button
                                    type="submit"
                                    className="p-3 md:p-3.5 lg:p-4 w-full bg-[#f5f2e8] text-black text-base md:text-lg lg:text-[19px] rounded-3xl cursor-pointer">
                                        Odeslat formulář
                                    </button>
                                    <Wrapper className="text-sm text-gray-600 text-center flex justify-center items-center flex-col lg:flex-row gap-1">
                                        <p>
                                            Odesláním formuláře souhlasíte se zásadami
                                        </p>
                                        {" "}
                                        <Link
                                        href="/ochrana-osobnich-udaju"
                                        target="_blank"
                                        className="border-b border-gray-600">
                                            ochraně osobních údajů
                                        </Link>
                                    </Wrapper>
                                </Flex>
                            </form>
                            <ContactInfo />
                        </Flex>
                    </ScrollAnimation>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;