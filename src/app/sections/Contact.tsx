import {
    Fragment
} from "react";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Flex from "../components/Flex";
import ContactInfo from "../components/ContactInfo";
import Padding from "../components/Padding";

const Contact = () => {
    return (
        <Fragment>
            <Wrapper
            className="max-w-full min-h-[1200px] md:min-h-[600px] aspect-square relative"
            id="kontakt">
                <Padding>
                    <Image
                    fill
                    // src="/assets/contact/contact.avif"
                    src="/assets/fotky/produkty/spaletova-okna/spaletova-okna-2.avif"
                    alt="Napište nám nebo zavolejte a proměníme Vaše představy do reality | Replikyoken.cz Jaroslav Heindinger"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    />
                    <Wrapper className="absolute inset-0"></Wrapper>
                    <Wrapper className="p-4 md:p-6 lg:p-8 text-white text-center absolute inset-0 flex justify-center items-center flex-col gap-3 md:gap-6 lg:gap-8">
                        <Heading>
                            Spojte se s námi.
                        </Heading>
                        <Subheading>
                            Napište nám nebo zavolejte a proměníme Vaše představy do reality.
                        </Subheading>
                        <Flex className="w-full md:flex-row flex-col">
                            <form className="p-3.5 md:p-4 lg:p-4.5 w-full md:w-6/10 min-h-100 bg-white/10 flex flex-col justify-center rounded-md">
                                <Flex className="flex-col">
                                    {
                                        [
                                            {
                                                type: "text",
                                                placeholder: "Jan nový"
                                            },
                                            {
                                                type: "email",
                                                placeholder: "jan@novy.cz"
                                            },
                                            {
                                                type: "tel",
                                                placeholder: "+420 601 123 456"
                                            },
                                            {
                                                type: "text",
                                                placeholder: "Zpráva pro nás"
                                            }
                                        ].map((input, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    {
                                                        index !== -1 && (
                                                            <input
                                                            type={input.type}
                                                            placeholder={input.placeholder}
                                                            className="p-4 md:p-4.5 lg:p-5 w-full bg-[#f5f2e8] text-black focus:outline-none placeholder:text-black"
                                                            />
                                                        )
                                                    }
                                                </Fragment>
                                            );
                                        })
                                    }
                                    <textarea
                                    placeholder="Zpráva pro nás"
                                    className="p-4 md:p-4.5 lg:p-5 min-h-[200px] w-full resize-none bg-[#f5f2e8] text-f5f2e8 focus:outline-none placeholder:text-black"></textarea>
                                    <button
                                    type="button"
                                    className="w-full bg-[#f5f2e8] text-black text-base md:text-lg lg:text-[19px] rounded-3xl cursor-pointer">
                                        <Padding>
                                            Odeslat formulář
                                        </Padding>
                                    </button>
                                </Flex>
                            </form>
                            <ContactInfo />
                        </Flex>
                    </Wrapper>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;