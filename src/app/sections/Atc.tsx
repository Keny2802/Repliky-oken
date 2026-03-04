"use client";

import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Cta from "../components/Cta";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Padding from "../components/Padding";

const Atc = () => {
    return (
        <Fragment>
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-[#f5f2e8] text-black text-center  flex justify-center items-center flex-col gap-3 md:gap-6 lg:gap-8">
                <ScrollAnimation>
                    <Heading>
                        Potřebujete nová okna do domu nebo bytu?
                    </Heading>
                    <Subheading>
                        Kvalitní, precizní a přesně na míru.
                    </Subheading>
                    <Cta
                    href="#kontakt"
                    onClick={(e) => {
                        setLinkWithoutHash(e as any, "kontakt");
                    }}
                    className="bg-white text-black">
                        <Padding className="bg-white mt-2 md:mt-4 lg:mt-6 w-full md:max-w-[400px] mx-auto rounded-3xl">
                            Kontaktujte nás
                        </Padding>
                    </Cta>
                </ScrollAnimation>
            </Wrapper>
        </Fragment>
    );
};

export default Atc;