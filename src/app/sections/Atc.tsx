"use client";

import {
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Cta from "../components/Cta";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Padding from "../components/Padding";

const Atc = () => {
    return (
        <Fragment>
            <Wrapper className="p-4 md:p-6 lg:p-8 bg-[#322e2e] text-white text-center  flex justify-center items-center flex-col gap-3 md:gap-6 lg:gap-8">
                <Heading>
                    Potřebujete nová okna do domu nebo bytu?
                </Heading>
                <Subheading>
                    Kvalitní, precizní a přesně na míru - ať vaše okna vypadají jako nová.
                </Subheading>
                <Cta
                href="#kontakt"
                onClick={(e) => {
                    setLinkWithoutHash(e, "kontakt");
                }}
                className="bg-white text-black">
                    <Padding>
                        Kontaktujte nás
                    </Padding>
                </Cta>
            </Wrapper>
        </Fragment>
    );
};

export default Atc;